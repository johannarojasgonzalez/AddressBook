// avec export, on peut importer ailleurs le contactModule
export const contactModule = function () {//grace au webpack on va remplacer le const par var pour être compatible avec d'autres versions de browser qui ne supportent pas encore le ECS6
  console.log('contactModule');
}