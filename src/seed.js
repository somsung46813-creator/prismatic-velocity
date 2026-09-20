export const PRISMATIC_SEED_VERSION="1";
function hashBytes(bytes){
  let h=2166136261>>>0;
  for(const b of bytes){h^=b;h=Math.imul(h,16777619);}
  return h>>>0;
}
export async function seedFromImage(url){
  try{
    const r=await fetch(url); const b=new Uint8Array(await r.arrayBuffer());
    return hashBytes(b);
  }catch{
    return 0x50524953;
  }
}
