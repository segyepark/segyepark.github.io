'use strict';

function showInfo(dataForSingleSheet, tabletop) {
	$('#loading').hide();

	var data = tabletop.sheets('All').all();
    var dates = _.pluck(data, 'Date');

    setChart('posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

	data = tabletop.sheets('KR').all();
    dates = _.pluck(data, 'Date');

    setChart('kr-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);
}

function setChart(id, data, dates, labels, values) {
    var color = Chart.helpers.color;
    var datasets = [];

    var colors = [window.chartColors.blue, window.chartColors.red];

    for (var i = 0; i < labels.length; i++) {
    	var label = labels[i];
    	var value = values[i];

		datasets.push({
            label: label,
            backgroundColor: color(colors[i]).alpha(0.5).rgbString(),
            borderColor: colors[i],
            data: _.pluck(data, value).map(Number),
            fill: false,
			pointRadius: 0,
            borderWidth: 2
		});
    }

	new Chart(document.getElementById(id).getContext('2d'), {
        type: 'line',
        data: {
            labels: dates,
            datasets: datasets
    	},
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                }]
            },
        }
	});
}

$(function() {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1HlTNWYCVySeEqqMXBIrOo7DWDNjKiY5FnZLuzQ5lsDw/';

	Tabletop.init({
		key: publicSpreadsheetUrl,
		callback: showInfo,
		simpleSheet: true
	});
});