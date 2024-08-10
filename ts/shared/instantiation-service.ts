import path from 'node:path'
import globby from 'globby'

export async function createInstance<Ctor extends new (...args: any[]) => any>(ctor: Ctor, dirs: string[]): Promise<InstanceType<Ctor>> {
  await Promise.all(dirs.map(async (dir) => {
    const baseDir = path.resolve(process.cwd(), dir)

    const files = globby.sync('**', {
      cwd: path.resolve(baseDir),
      onlyDirectories: true,
    })

    return files.map(async (file) => {
      const moduleName = file.replace(/-/g, '_')

      const module = await import(path.resolve(baseDir, file, 'index.ts'))
      ctor.prototype[moduleName] = module[moduleName];
    })
  }))

  // eslint-disable-next-line new-cap
  return new ctor()
}
