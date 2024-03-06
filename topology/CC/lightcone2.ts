interface lightcone2 {
    radius: number;
    height: number;
}
void function Vertices(lightcone:lightcone2) {
    const radius = lightcone.radius;
    const height = lightcone.height;
    let vertices = [];
    for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        const x = radius * Math.sin(angle)
        const y = radius * Math.cos(angle)
        const z = height
        vertices.push([x, y])
        vertices.push([z])
    }
    return [vertices]
}
console.log('vertices')
