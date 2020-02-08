'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 16;
var TEXT_GAP = 35;
var oneItemWidth = BAR_GAP + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  // Cloude
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Main-text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, TEXT_GAP * 1.5);

  var maxTime = getMaxElement(times);

  function getColorSaturation(min, max) {
    // a random numer from min to (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  // Bar charts

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(232,' + getColorSaturation(1, 100) + '%, 45%)';
    }
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + oneItemWidth * i, CLOUD_HEIGHT - GAP * 2);
    ctx.fillRect(CLOUD_X + BAR_GAP + oneItemWidth * i, CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};


