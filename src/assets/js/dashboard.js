export function TopNav() {
    const panelSlider = document.querySelector('.panel-slider');
    const closeButton = document.getElementById('closeButton');
    const openButton = document.getElementById('openButton');

    if (openButton) {
        openButton.addEventListener("click", () => {
            panelSlider.classList.add('active')
        });
        closeButton.addEventListener("click", () => {
            panelSlider.classList.remove('active')
        })

        function showNotification() {
            document.getElementById('notification').style.display = 'block';
        }

        function hideNotification() {
            document.getElementById('notification').style.display = 'none';
        }
    } else {
        console.log('openbutoon nexiste pas')

    }





    // const button = document.getElementById('dropdown-button');
    // const menu = document.getElementById('dropdown-menu');

    // button.addEventListener('click', function () {
    //     menu.classList.toggle('hidden');
    // });

    // document.addEventListener('click', function (event) {
    //     if (!menu.contains(event.target) && event.target !== button) {
    //         menu.classList.add('hidden');
    //     }
    // });



    // const button = document.getElementById('dropdown-buttons');
    // const menu = document.getElementById('dropdown-menus');

    // button.addEventListener('click', function () {
    //     menu.classList.toggle('hidden');
    // });

    // document.addEventListener('click', function (event) {
    //     if (!menu.contains(event.target) && event.target !== button) {
    //         menu.classList.add('hidden');
    //     }
    // });

}