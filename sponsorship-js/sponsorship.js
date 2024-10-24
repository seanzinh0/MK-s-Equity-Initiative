document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems);


    const allTheTabsElems = document.querySelector('.tabs')
    const instance = M.Tabs.init(allTheTabsElems, {
        swipeable : true,
    });
    
});





