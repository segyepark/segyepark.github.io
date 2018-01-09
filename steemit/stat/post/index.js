'use strict';

function showInfo(dataForSingleSheet, tabletop) {
	$('#loading').hide();
    $('.disabled').removeClass();

	var data = tabletop.sheets('All').all();
    var dates = _.pluck(data, 'Date');

    setChart('all-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('all-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('all-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('all-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('all-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('all-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 365);
    dates = _.pluck(data, 'Date');

    setChart('1year-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('1year-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('1year-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('1year-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('1year-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('1year-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 183);
    dates = _.pluck(data, 'Date');

    setChart('6month-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('6month-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('6month-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('6month-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('6month-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('6month-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 91);
    dates = _.pluck(data, 'Date');

    setChart('3month-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('3month-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('3month-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('3month-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('3month-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('3month-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 31);
    dates = _.pluck(data, 'Date');

    setChart('1month-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('1month-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('1month-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('1month-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('1month-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('1month-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 14);
    dates = _.pluck(data, 'Date');

    setChart('2week-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('2week-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('2week-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('2week-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('2week-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('2week-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = _.last(data, 7);
    dates = _.pluck(data, 'Date');

    setChart('1week-posts-and-unique-authors-chart', data, dates, ['Posts', 'Unique Authors'], ['Posts', 'UniqueAuthors']);
    setChart('1week-avg-posts-per-author-chart', data, dates, ['Avg. Posts Per Author'], ['AvgPostsPerAuthor']);
    setChart('1week-total-payout-chart', data, dates, ['Total Payout ($)'], ['TotalPayout']);
    setChart('1week-max-payout-chart', data, dates, ['Max. Payout ($)'], ['MaxPayout']);
    setChart('1week-avg-payout-chart', data, dates, ['Avg. Payout ($)'], ['AvgPayout']);
    setChart('1week-steem-price-chart', data, dates, ['STEEM Price ($)'], ['SteemPrice']);

    data = tabletop.sheets('KR').all();
    dates = _.pluck(data, 'Date');

    setChart('kr-all-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-all-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-all-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-all-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-all-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-all-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 365);
    dates = _.pluck(data, 'Date');

    setChart('kr-1year-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-1year-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-1year-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-1year-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-1year-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-1year-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 183);
    dates = _.pluck(data, 'Date');

    setChart('kr-6month-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-6month-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-6month-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-6month-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-6month-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-6month-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 91);
    dates = _.pluck(data, 'Date');

    setChart('kr-3month-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-3month-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-3month-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-3month-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-3month-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-3month-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 31);
    dates = _.pluck(data, 'Date');

    setChart('kr-1month-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-1month-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-1month-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-1month-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-1month-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-1month-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 14);
    dates = _.pluck(data, 'Date');

    setChart('kr-2week-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-2week-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-2week-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-2week-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-2week-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-2week-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);

    data = _.last(data, 7);
    dates = _.pluck(data, 'Date');

    setChart('kr-1week-posts-and-unique-authors-chart', data, dates, ['게시물수', '유니크 작가수'], ['Posts', 'UniqueAuthors']);
    setChart('kr-1week-avg-posts-per-author-chart', data, dates, ['작가별 평균 게시물수'], ['AvgPostsPerAuthor']);
    setChart('kr-1week-total-payout-chart', data, dates, ['게시물 전체 보상액 ($)'], ['TotalPayout']);
    setChart('kr-1week-max-payout-chart', data, dates, ['게시물 최대 보상액 ($)'], ['MaxPayout']);
    setChart('kr-1week-avg-payout-chart', data, dates, ['게시물별 평균 보상액 ($)'], ['AvgPayout']);
    setChart('kr-1week-steem-price-chart', data, dates, ['STEEM 가격 ($)'], ['SteemPrice']);
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