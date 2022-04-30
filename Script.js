function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('head1').style.width = '100%';
    document.getElementById('main').style.position = 'fixed';
    document.getElementById('main').style.zIndex = '2';
    document.getElementById('main').style.backgroundColor = '#fff';
    var x = document.getElementsByClassName('sidenav-open');
    for (i = 0; i < x.length; i++) {
        x[i].style.position = 'fixed';
        x[i].style.zIndex = '1';
    }

}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('sidebar').style.display = 'initial';
    document.getElementById('main').style.position = 'initial';
    document.getElementById('main').style.zIndex = '3';
    var x = document.getElementsByClassName('sidenav-open');
    for (i = 0; i < x.length; i++) {
        x[i].style.position = 'initial';
        x[i].style.zIndex = '3';
    }
}

function closeUrgentnotices() {
    document.getElementById('Urgent').style.display = 'none';
    document.getElementById('banner-img').style.opacity = '0.9';
}

// function closeSignUp() {
//     document.getElementById('LoginDone').style.display = 'none';
// }
$(".slider .carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
var xValues = ["CS", "IT", "E&TC"];
var yValues = [90, 70, 45, 0];
var barColors = ["red", "green", "blue", "white"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "placement for 2021-22"
        }
    }
});

function search_input() {
    let input = document.getElementById('searchBox').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('headgrid');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "item";
        }
    }
}