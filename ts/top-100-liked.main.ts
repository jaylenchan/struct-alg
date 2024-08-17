import { createInstance } from 'ts/shared/instantiation-service';
import { Top100Liked } from 'ts/leetcode/top-100-liked';

(async () => {
  const top_100_liked = await createInstance(Top100Liked, []);
})()
