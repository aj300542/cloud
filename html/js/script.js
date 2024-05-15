let svgPath = numbershape;
let pathPoints = svgPath.match(/(\d+\s\d+)/g).map(point => point.split(' ').map(Number));
let currentPointIndex = 0;
let speed = 0.2; // 控制画笔的速度

// 在每对连续点之间添加一个点
let newPathPoints = [];
for (let i = 0; i < pathPoints.length - 1; i++) {
    let midPoint = [(pathPoints[i][0] + pathPoints[i + 1][0]) / 2, (pathPoints[i][1] + pathPoints[i + 1][1]) / 2];
    newPathPoints.push(pathPoints[i], midPoint);
}
newPathPoints.push(pathPoints[pathPoints.length - 1]); // 添加最后一个点

let colors = [
    'rgba(155, 155, 155, ' + (Math.random() * 0.025 + 0.0) + ')',
    'rgba(222, 222, 222, ' + (Math.random() * 0.035 + 0.1) + ')',
    'rgba(152, 152, 152, ' + (Math.random() * 0.025 + 0.0) + ')',
    'rgba(200, 200, 200, ' + (Math.random() * 0.035 + 0.1) + ')',
    'rgba(140, 140, 140, ' + (Math.random() * 0.025 + 0.0) + ')',
    'rgba(100, 100, 100, ' + (Math.random() * 0.035 + 0.1) + ')',
    'rgba(128, 128, 128, ' + (Math.random() * 0.025 + 0.0) + ')',
];
let eraseStart = false;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('myCanvas');
    // background(0); // Commented out to make the background transparent
}

function draw() {
    blendMode(SCREEN); // 设置叠加模式为屏幕（Screen）
    noStroke(); // 添加这行代码来移除描边
    translate(width / 2 - 200, height / 2 - 200); // 将画布的原点移动到中心并向左移动200，向上移动200

    for (let i = 0; i < 5; i++) { // 绘制5个大小不一的圆形
        let colorIndex = floor(random(colors.length)); // 随机选择一个颜色
        fill(colors[colorIndex]);
        let size = random(1, min(width, height) * 0.09); // 随机大小
        let offsetX = random(-43, 43); // 随机位移X
        let offsetY = random(-43, 43); // 随机位移Y
        ellipse(newPathPoints[Math.floor(currentPointIndex)][0] + offsetX, newPathPoints[Math.floor(currentPointIndex)][1] + offsetY, size, size); // 在路径点上绘制圆圈
    }
    currentPointIndex = (currentPointIndex + speed) % newPathPoints.length; // 更新当前的画笔位置

    if (millis() > 35000) { 
        eraseStart = true;
    }

    if (eraseStart) {
        blendMode(overlay); 

    }
}
