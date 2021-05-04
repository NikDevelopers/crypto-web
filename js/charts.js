var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Oct. 17", "Nov. 17", "Dec. 17", "Jan. 17","Feb. 17"],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(72, 157, 215)',
            borderColor: 'rgb(72, 157, 215)',
            data: [550, 750, 800, 750, 850],
        }]
    },
});

var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Oct. 17", "Nov. 17", "Dec. 17", "Jan. 17","Feb. 17"],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(72, 157, 215)',
            borderColor: 'rgb(72, 157, 215)',
            data: [550, 750, 800, 750, 850],
        }]
    },
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Oct. 17", "Nov. 17", "Dec. 17", "Jan. 17","Feb. 17"],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(72, 157, 215)',
            borderColor: 'rgb(72, 157, 215)',
            data: [550, 750, 800, 750, 850],
        }]
    },
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            '',
            '',
            '',
            ''
        ],
        datasets: [{
            label: 'Total Trade Volume',
            data: [60, 30, 30, 25],
            backgroundColor: [
                'rgb(9, 15, 63)',
                'rgb(72, 157, 215)',
                'rgb(248, 186, 26)',    
                'rgb(207, 18, 87)'    
            ],
            hoverOffset: 10,
            borderWidth: 0,
        }]
    },
});
    


