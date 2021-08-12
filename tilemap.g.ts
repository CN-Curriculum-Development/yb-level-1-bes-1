// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000101010101010101010101020102020202010201010201020201020202010102020201010202010101020202010102020201010201020102020202010102010202020101020101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . 2 
2 . 2 . . 2 . . . 2 
2 . . . 2 2 . . 2 2 
2 . . . 2 2 . . . 2 
2 . 2 . 2 . . . . 2 
2 . 2 . . . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000800010404040404040404080205070505050507050902050705050505050509020505050707050507090205050507070505050902050705050505050509020507050505070705090306060606060606060a`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . 2 
2 . 2 . . . . . . 2 
2 . . . 2 2 . . 2 2 
2 . . . 2 2 . . . 2 
2 . 2 . . . . . . 2 
2 . 2 . . . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
