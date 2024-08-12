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
      let moduleName = file.replace(/-/g, '_')

      // 如果开头是数字，加上下划线
      if (/^\d/.test(moduleName)) {
        moduleName = `_${moduleName}`
      }

      const module = await import(path.resolve(baseDir, file, 'index.ts'))
      ctor.prototype[moduleName] = module[moduleName];
    })
  }))

  return Reflect.construct(ctor, []);
}
