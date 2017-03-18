$(document).ready(function() {

    Moveit.put(big, {
        start: '0%',
        end: '0%'
    });

    Moveit.put(small, {
        start: '0%',
        end: '0%'
    });

    // 64 100
    Moveit.put(success, {
        start: '0%',
        end: '0%'
    });

    // 66 94
    Moveit.put(error, {
        start: '0%',
        end: '0%'
    });

    // 70 97
    Moveit.put(error2, {
        start: '0%',
        end: '0%'
    });

    Moveit.animate(small, {
        start: '20%',
        end: '80%',
        duration: .6
    });

    Moveit.animate(small, {
        start: '100%',
        end: '101%',
        duration: .6
    });
});
