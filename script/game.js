const canvas = document.getElementById('render-canvas')
const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
})

function createScene() {
    let scene = new BABYLON.Scene(engine)
    
    let camera = new BABYLON.ArcRotateCamera('camera1', Math.PI/2, Math.PI/2, 2, new BABYLON.Vector3(0, 6, -20), scene)
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(canvas, true)

    let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene)

    let sphere = BABYLON.MeshBuilder.CreateBox('player', {
        size: 4,
        sideOrientation: BABYLON.Mesh.FRONTSIDE
    }, scene)
    sphere.position.y = 2

    let ground = BABYLON.MeshBuilder.CreateGround('ground1', {
        width: 60,
        height: 6,
        subdivisions: 2,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene)

    return scene
}

window.addEventListener('resize', function() {
    engine.resize()
})

let scene = createScene()
engine.runRenderLoop(function() {
    scene.render()
})