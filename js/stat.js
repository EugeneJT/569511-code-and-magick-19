'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_HEIGHT = 16;
var TEXT_GAP = 35;
var TEXT_COLOR = '#000';
var TEXT_FONT = '16px PT Mono';
var TEXT_BASELINE = 'hanging';

var HEADING_TEXT = ['Ура вы победили!', 'Список результатов:'];

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

var getRandomNum = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

window.renderStatistics = function (ctx, names, times) {

  // Cloude
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  // Main-text
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = TEXT_BASELINE;

  for (i = 0; i < HEADING_TEXT.length; i++) {
    ctx.fillText(HEADING_TEXT[i], CLOUD_X + GAP * 1.5, TEXT_GAP * (i + 1) * 0.9);
  }

  var maxTime = getMaxElement(times);

  // Bar charts

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? MY_BAR_COLOR : 'hsl(232,' + getRandomNum(1, 100) + '%, 45%)';
    ctx.fillRect(CLOUD_X + BAR_GAP + oneItemWidth * i, CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + oneItemWidth * i, CLOUD_HEIGHT - GAP * 2);
  }
};


