$(document).ready(function() {

    menu();

});

function menu() {
    $("body").css({
        "background": "#637182"
    });
    var play = ($("<img/>").attr("src", "../images/1.png").attr("id", "setTimeout")).appendTo("#area").css({
        "margin-top": "20px",
        "max-width": "162px",
        "max-height": "72px",
        "padding": "10px"
    });
    var settings = ($("<img/>").attr("src", "../images/853bc8827ce391a9acbaf5ed527d1bd5.png").attr("id", "music")).appendTo("#area").css({
        "max-width": "100px",
        "max-height": "100px",
        "padding": "10px"
    });
    var help = ($("<img/>").attr("src", "../images/icon.png").attr("id", "help")).appendTo("#area").css({
        "max-width": "150px",
        "max-height": "150px",
        "padding": "10px"
    });

    var info = ($("<img/>").attr("src", "../images/info_button_by_s.png").attr("id", "info")).appendTo("#area").css({
        "max-width": "200px",
        "max-height": "91px",
        "padding": "10px"
    });
    $("div").css({
        "display": "flex",
        "flex-direction": "column",
        "background-image": "url(../images/maxresdefault.jpg)",
        "width": "900px",
        "height": "506px",
        "margin-left": "25%",
        "margin-top": "100px"
    });
    var clickSound = $("<audio/>").appendTo("body");
    clickSound[0].src = "../music/sound.mp3";
    clickSound[0].play();
    $("#music").one("click", function() {
        var on = ($("<img/>").attr("src", "../images/on.png").attr("id", "on")).appendTo("#area").css({
            "max-width": "100px",
            "max-height": "101px",
            "padding": "10px"
        });
        var off = ($("<img/>").attr("src", "../images/off.png").attr("id", "off")).appendTo("#area").css({
            "max-width": "100px",
            "max-height": "100px",
            "padding": "10px"
        });
        $("#on").click(function() {
            clickSound[0].play();

        });
        $("#off").dblclick(function() {
            clickSound[0].pause();

        });
    });



    var timeout = $("#setTimeout");
    timeout.click(function() {

        setTimeout(mainGame, 10);
    });
    $("#help").click(function() {
        document.write("Reload the page,select button play and start");
    });
    $("#info").click(function() {
        document.write("http://www.puffgames.com/flashsonic/");
    });
}

function mainGame() {

    var player = new Sonic(400, 150);

    $("body").empty();
    $("body").css({
        "background-image": "url(../images/game1.jpg)",
        "background-repeat": "no-repeat"
    });
    var map = $("<div/>").attr("id", "map").appendTo("body").css({
        "position": "relative",
        " width": "2972px",
        " height": " 512px",
    });
    var dynamicc = $("<div/>").attr("id", "dynamic").appendTo("#map");
    var stat = ($("<div/>").attr("id", "stat")).appendTo("#map");
    var stat1 = ($("<div/>").attr("id", "stat1")).appendTo("#map");
    var enemy2 = ($("<img/>").attr("id", "enemy2").attr("src", "../images/enemy2.png")).appendTo("#map");
    var enemy3 = ($("<div/>").attr("id", "enemy3")).appendTo("#map");
    var floor = $("<div/>").attr("id", "floor").appendTo("#map").css({
        "position": "absolute",
        " width": "400px",
        " height": " 100px",
        "top": "393px",
        "left": "0px"
    });
    var floor2 = $("<div/>").attr("id", "floor2").appendTo("#map").css({
        "position": "absolute",
        " width": "500px",
        " height": " 100px",
        "top": "360px",
        "left": "390px"
    });
    var floor23 = $("<div/>").attr("id", "floor23").appendTo("#map").css({

        "position": "absolute",
        " width": "170px",
        " height": " 100px",
        "top": "360px",
        "left": "990px"
    });
    var floor3 = $("<div/>").attr("id", "floor3").appendTo("#map").css({

        "position": "absolute",
        " width": "100px",
        " height": " 100px",
        "top": "300px",
        "left": "890px"
    });
    var floor4 = $("<div/>").attr("id", "floor4").appendTo("#map").css({

        "position": "absolute",
        " width": "500px",
        " height": " 100px",
        "top": "300px",
        "left": "1700px"
    });
    var floor5 = $("<div/>").attr("id", "floor5").appendTo("#map").css({

        "position": "absolute",
        " width": "190px",
        " height": " 100px",
        "top": "260px",
        "left": "1910px"
    });
    var floor6 = $("<div/>").attr("id", "floor6").appendTo("#map").css({
        "position": "absolute",
        " width": "128px",
        " height": " 100px",
        "top": "360px",
        "left": "2617px"
    });
    var floor7 = $("<div/>").attr("id", "floor7").appendTo("#map").css({
        "position": "absolute",
        " width": "60px",
        " height": " 100px",
        "top": "365px",
        "left": "2905px"
    });
    var floor8 = $("<div/>").attr("id", "floor8").appendTo("#map").css({
        "position": "absolute",
        " width": "220px",
        " height": " 90px",
        "top": "428px",
        "left": "1160px"
    });
    var floor9 = $("<div/>").attr("id", "floor9").appendTo("#map").css({
        "position": "absolute",
        " width": "328px",
        " height": " 100px",
        "top": "398px",
        "left": "1380px"
    });
    var floor10 = $("<div/>").attr("id", "floor10").appendTo("#map").css({

        "position": "absolute",
        " width": "370px",
        " height": " 80px",
        "top": "425px",
        "left": "2250px"
    });
    var floor101 = $("<div/>").attr("id", "floor101").appendTo("#map").css({
        "position": "absolute",
        " width": "170px",
        " height": " 80px",
        "top": "425px",
        "left": "2740px"
    });
    var floor33 = $("<div/>").attr("id", "floor33").appendTo("#map").css({
        "position": "absolute",
        "width": "60px",
        "height": " 100px",
        "top": "398px",
        "left": "2200px"
    });
    var floor11 = $("<div/>").attr("id", "floor11").appendTo("#map");
    var floor12 = $("<div/>").attr("id", "floor12").appendTo("#map");
    var floor13 = $("<div/>").attr("id", "floor13").appendTo("#map");
    var floor14 = $("<div/>").attr("id", "floor14").appendTo("#map");
    var floor15 = $("<div/>").attr("id", "floor15").appendTo("#map");
    var floor16 = $("<div/>").attr("id", "floor16").appendTo("#map");
    var floor17 = $("<div/>").attr("id", "floor17").appendTo("#map");
    var floor18 = $("<div/>").attr("id", "floor18").appendTo("#map");
    var floor19 = $("<div/>").attr("id", "floor19").appendTo("#map");
    var floor20 = $("<div/>").attr("id", "floor20").appendTo("#map");
    var floor21 = $("<div/>").attr("id", "floor21").appendTo("#map");
    var floor211 = $("<div/>").attr("id", "floor211").appendTo("#map");
    var floor212 = $("<div/>").attr("id", "floor212").appendTo("#map");
    var floor22 = $("<div/>").attr("id", "floor22").appendTo("#map");
    var floor23 = $("<div/>").attr("id", "floor23").appendTo("#map");
    var floor24 = $("<div/>").attr("id", "floor24").appendTo("#map");
    var floor25 = $("<div/>").attr("id", "floor25").appendTo("#map");
    var floor26 = $("<div/>").attr("id", "floor26").appendTo("#map");
    var floor27 = $("<div/>").attr("id", "floor27").appendTo("#map");
    var dynamic = $("#dynamic");
    var directions = {};
    var speedX = 2;
    var lastDirection = "down";
    var count = 0;
    var imageCounter = 1;

    function moveee(e) {
        if ((count += 20) % 200 == 0) {
            imageCounter = imageCounter == 3 ? 0 : (imageCounter + 1);
        }
        for (var i in directions) {
            if (dynamic.position().left > 0 && i == 37) {
                dynamic.css("left", (dynamic.position().left - speedX) + "px");
                lastDirection = "left";
                dynamic.css("background-position", 210 - 70 * imageCounter + "px 0");
            }

            if (dynamic.position().left < ($("#map").width() - dynamic.width()) && i == 39) {
                dynamic.css("left", (dynamic.position().left + speedX) + "px");
                lastDirection = "right";
                dynamic.css("background-position", 630 - 70 * imageCounter + "px 0");
            }

            if (dynamic.position().top > 0 && i == 38) {
                dynamic.css("top", (dynamic.position().top - speedX) + "px");
                lastDirection = "up";
                dynamic.css("background-position", 420 - 70 * imageCounter + "px 0");
            }

            if (dynamic.position().top < ($("#map").height() - dynamic.height()) && i == 40) {
                dynamic.css("top", (dynamic.position().top + speedX) + "px");
                lastDirection = "down";
                dynamic.css("background-position", 683 - 70 * imageCounter + "px 0");
            }
        }
    }
    var interval = setInterval(moveee, 20);
    var dynamic = $("#dynamic");
    var stat = $("#stat");
    var stat1 = $("#stat1");
    var enemy2 = $("#enemy2");
    var enemy3 = $("#enemy3");
    var directions = {};
    var speed = 2;
    var STATIC_HORIZONTAL_CENTER = stat.position().left + stat.width() / 2;
    var STATIC_VERTICAL_CENTER = stat.position().top + stat.height() / 2;
    var STATIC_HORIZONTAL1_CENTER = stat1.position().left + stat1.width() / 2;
    var STATIC_VERTICAL1_CENTER = stat1.position().top + stat1.height() / 2;
    var STATIC_HORIZONTALL_CENTER = enemy2.position().left + enemy2.width() / 2;
    var STATIC_VERTICALL_CENTER = enemy2.position().top + enemy2.height() / 2;
    var STATIC_HORIZONTALLL_CENTER = enemy3.position().left + enemy3.width() / 2;
    var STATIC_VERTICALLL_CENTER = enemy3.position().top + enemy3.height() / 2;
    var WIDTH_DIFFERENCE = dynamic.width() / 2 + stat.width() / 2;
    var HEIGHT_DIFFERENCE = dynamic.height() / 2 + stat.height() / 2;
    var WIDTH_DIFFERENCE = dynamic.width() / 2 + stat1.width() / 2;
    var HEIGHT_DIFFERENCE = dynamic.height() / 2 + stat1.height() / 2;
    var WIDTH_DIFFERENCE = dynamic.width() / 2 + enemy2.width() / 2;
    var HEIGHT_DIFFERENCE = dynamic.height() / 2 + enemy2.height() / 2;
    var WIDTH_DIFFERENCE = dynamic.width() / 2 + enemy3.width() / 2;
    var HEIGHT_DIFFERENCE = dynamic.height() / 2 + enemy3.height() / 2;
    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
    }

    function stop(e) {
        delete directions[e.which];
    }

    function move() {
        for (var i in directions) {
            if (dynamic.position().left > 0 && i == 37) {
                dynamic.css("left", (dynamic.position().left - speed) + "px");
            }

            if (dynamic.position().left < ($("#map").width() - dynamic.width()) && i == 39) {
                dynamic.css("left", (dynamic.position().left + speed) + "px");
            }

            if (dynamic.position().top > 0 && i == 38) {
                dynamic.css("top", (dynamic.position().top - speed) + "px");
            }

            if (dynamic.position().top < ($("#map").height() - dynamic.height()) && i == 40) {
                dynamic.css("top", (dynamic.position().top + speed) + "px");
            }

        }
    }

    function checkCollision() {
        DYNAMIC_HORIZONTAL_CENTER = dynamic.position().left + dynamic.width() / 2;
        DYNAMIC_VERTICAL_CENTER = dynamic.position().top + dynamic.height() / 2;

        if (Math.abs(DYNAMIC_HORIZONTAL_CENTER - STATIC_HORIZONTAL_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VERTICAL_CENTER - STATIC_VERTICAL_CENTER) <= HEIGHT_DIFFERENCE) {
            player.Dieing();
            console.log(player);
        }
        if (Math.abs(DYNAMIC_HORIZONTAL_CENTER - STATIC_HORIZONTALL_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VERTICAL_CENTER - STATIC_VERTICALL_CENTER) <= HEIGHT_DIFFERENCE) {
            player.Dieing();
            console.log(player);
        }
        if (Math.abs(DYNAMIC_HORIZONTAL_CENTER - STATIC_HORIZONTALLL_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VERTICAL_CENTER - STATIC_VERTICALLL_CENTER) <= HEIGHT_DIFFERENCE) {

            player.Dieing();
            console.log(player);
        }
        if (Math.abs(DYNAMIC_HORIZONTAL_CENTER - STATIC_HORIZONTAL1_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VERTICAL_CENTER - STATIC_VERTICAL1_CENTER) <= HEIGHT_DIFFERENCE) {

            player.Dieing();
            console.log(player);
        }
        if (dynamic.position().left >= 6640 && dynamic.position().top >= 340) {
            $("body").empty();
            $("body").css({
                "background-image": "url(../images/win.jpg)",
                "background-size": "cover",
                "height": "100%",
                "width": "100%"

            });

            var restart = ($("<img/>").attr("src", "../images/rrr.png").attr("id", "rrr")).appendTo("body").css({
                "width": "100px",
                "height": "100px",

            });
            $("#rrr").click(function() {
                var conf = confirm("Do you want to restart?");
                if (conf) {
                    setTimeout(function() {
                        location.reload(true);
                    }, 100);
                }
            });
        }
        if (player.life <= 0 || dynamic.position().top > 500) {
            $("body").empty();
            $("body").css({
                "background-image": "url(../images/gameover.jpg)",
                "background-size": "cover",
                "background-repeat": "repeat"

            });
            var restart = ($("<img/>").attr("src", "../images/rrr.png").attr("id", "rrr")).appendTo("body").css({
                "width": "100px",
                "height": "100px",

            });
            $("#rrr").click(function() {
                var conf = confirm("Do you want to restart?");
                if (conf) {
                    setTimeout(function() {
                        location.reload(true);
                    }, 100);
                }
            });
        }
    }


    var interval = setInterval(function() {
        move();
        checkCollision();
        //checkLifeStatus();
    }, 20);

    var dynamic = $("#dynamic");
    var walls = [$("#floor"), $("#floor2"), $("#floor3"), $("#floor4"), $("#floor5"), $("#floor6"), $("#floor7"), $("#floor8"), $("#floor9"), $("#floor10"), $("#floor23"), $("#floor101"), $("#floor33"), $("#floor11"), $("#floor12"), $("#floor13"), $("#floor14"), $("#floor15"), $("#floor16"), $("#floor17"), $("#floor18"), $("#floor19"), $("#floor20"), $("#floor21"), $("#floor211"), $("#floor212"), $("#floor22"), $("#floor23"), $("#floor24"), $("#floor25"), $("#floor26"), $("#floor27")];
    var directions = {};
    var speedX = 2;
    var speedY = 0;
    var gravity = 0.2;
    var jumpState = true;
    var STATIC_HOR_CENTER;
    var STATIC_VER_CENTER;

    var WIDTH_DIFFERENCE;
    var HEIGHT_DIFFERENCE;

    var DYNAMIC_HOR_CENTER;
    var DYNAMIC_VER_CENTER;

    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
    }

    function stop(e) {
        delete directions[e.which];
    }

    function move(e) {
        for (var i in directions) {
            //console.log(i);

            if (dynamic.position().left > 0 && i == 37) {
                dynamic.css("left", (dynamic.position().left - speedX) + "px");
            }

            if (dynamic.position().left < ($("#map").width() - dynamic.width()) && i == 39) {
                dynamic.css("left", (dynamic.position().left + speedX) + "px");
            }
            if (dynamic.position().top > 0 && i == 38 && jumpState == false) {
                jumpState = true;
                dynamic.css("top", (dynamic.position().top - 6));
            }
            if (dynamic.position().top < ($("#map").height() - dynamic.height()) && i == 40) {
                dynamic.css("top", (dynamic.position().top + speedX) + "px");
            }
        }
        checkCollisionn();
        jump();
    }

    var interval = setInterval(move, 20);

    function jump() {
        if (jumpState) {
            if (speedY > -9) {
                speedY -= gravity;
            }
            dynamic.css("top", dynamic.position().top - speedY)
        }
    }

    function checkCollisionn() {
        for (var i in walls) {
            STATIC_HOR_CENTER = walls[i].position().left + walls[i].width() / 2;
            STATIC_VER_CENTER = walls[i].position().top;
            WIDTH_DIFFERENCE = dynamic.width() / 2 + walls[i].width() / 2;
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width() / 2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();
            if (Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5) {
                //$("#status").text("TRUE");
                jumpState = false;
                dynamic.css("top", walls[i].position().top - dynamic.height());
                stat.css("top", walls[i].position().top - stat.height());
                speedY = 9;
                break;
            } else {
                //$("#status").text("FALSE");
                if (jumpState == false) {
                    speedY = 0;
                    jumpState = true;
                }
            }
        }
    }

    var clickSound = $("<audio/>").appendTo("body");
    clickSound[0].src = "../music/sound.mp3";

    clickSound[0].play();
    var on = ($("<img/>").attr("src", "../images/on.png").attr("id", "on")).appendTo("body").css({
        "max-width": "50px",
        "max-height": "50px",
        "padding": "10px"
    });
    var off = ($("<img/>").attr("src", "../images/off.png").attr("id", "off")).appendTo("body").css({
        "max-width": "50px",
        "max-height": "50px",
        "margin-top": "1px",
        "padding": "10px"
    });

    var Heart = ($("<img/>").attr("src", "../images/Heart.png").attr("id", "Heart")).appendTo("body").css({
        "max-width": "80px",
        "max-height": "80px",
        "padding": "10px"
    });

    var restart = ($("<img/>").attr("src", "../images/rrr.png").attr("id", "rrr")).appendTo("body").css({
        "max-width": "80px",
        "max-height": "80px",
        "padding": "10px"
    });
    $("#rrr").click(function() {
        var conf = confirm("Do you want to restart?");
        if (conf) {
            setTimeout(function() {
                location.reload(true);
            }, 100);
        }
    });

    $("#Heart").click(function() {

        var conf = confirm("Do you want to pay 50 coin and buy 1 heart?");
        if (conf) {

            player.Replenish();
            player.Buy();
            console.log(player);
        }
    });
    $("#on").click(function() {
        clickSound[0].play();

    });
    $("#off").click(function() {
        clickSound[0].pause();

    });
}