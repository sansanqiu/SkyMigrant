$(function () {
  $("#fullpage").fullpage({
    // 统一添加背景颜色
    sectionsColor: [
      "rgb(95, 143, 114)",
      "rgb(203, 214, 242)",
      "rgb(115,173,177)",
      "rgb(207,220,255)",
      "rgb(177,210,235)",
      "rgb(207,220,255)",
      "rgb(160,220,169)",
      "rgb(160,220,169)",
      "rgb(160,220,169)",
      "rgb(203,214,242)",
      "rgb(203,214,242)",
      "rgb(57,55,147)",
      "rgb(207,220,255)",
      "rgb(160,220,169)",
      "rgb(160,220,169)",
      "rgb(160,220,169)",
    ],
    scrollingSpeed: 800, //滚动的时间
    // afterLoad: function (origin) {
    //   console.log(origin.index); //判断滚动到第几屏
    // },

    // 按钮 点击样式

    // 回调函数
    afterLoad: function (anchorLink, index) {
      // var loadedSection = $(this);
      //迁飞
      if (index == 2) {
        $(".section2 .p1").animate({ opacity: 1 }, function () {
          $(".section2 .p1")
            .delay(2000)
            .animate({ opacity: 0 }, function () {
              $(".section2 .p2").animate({ opacity: 1 }, function () {
                $(".section2 .p2")
                  .delay(1000)
                  .animate({ opacity: 0 }, function () {
                    $(".section2 .p3").animate({ opacity: 1 }, function () {
                      $(".section2 .p3").delay(1500).animate({ opacity: 0 });
                    });
                  });

              });
            });
        });

      }
      //九条线
      if (index == 3) {
        // 字幕出现
        $(".section3 .p1").animate({ opacity: 1 }, function () {
          $(".section3 .p1")
            .delay(2000)
            .animate({ opacity: 0 }, function () {
              $(".section3 .btn_1,.section3 .btn_2").animate(
                { opacity: 1 },
                function () { }
              );
            });
        });
        // 按钮和图片绑定
        $(".button1").on("click", function () {
          $(".china").hide();
          $(".wimage").hide();
          let index = $(this).index();
          $(".fly").eq(index).show().siblings(".fly").hide();
        });
        $(".c").on("click", function () {
          $(".fly").hide();
          $(".wimage").hide();
          $(".china").show();
        });
        $(".world").on("click", function () {
          $(".fly").hide();
          $(".china").hide();
          $(".wimage").show();
        });
      }
      //但不是
      if (index == 4) {
        // let str = $(".section4 .word").html();
        // console.log(str);
        // for (var i = 1; i <= str.length; i++) {
        //   setTimeout(function () {
        //     $(".section4 .word").innerHTML = str.substring(0, i);
        //   }, (i - 1) * 100);
        // }
        $(".section4 .word").animate({ opacity: 1 }, 5000, function () {
          $(".section4 .word").delay(4000).animate({ opacity: 0 });
        });
      }
      // 候鸟数量下降
      if (index == 5) {
        $(".section5 .p1").animate({ opacity: 1 }, function () {
          $(".section5 .p1")
            .delay(2000)
            .animate({ opacity: 0 }, function () {
              $(".section5 .gif section").animate({ opacity: 1 });
            });
        });
      }
      if (index == 6) {
        $(".section6 .p1").animate({ opacity: 1 }, function () {
          $(".section6 .p1")
            .delay(2000)
            .animate({ opacity: 0 }, function () {
              $(".section6 .p2").animate({ opacity: 1 }, function () {
                $(".section6 .p2").delay(2000).animate({ opacity: 0 });
              });
            });
        });
      }
      // 你们想知道？
      if (index == 7) {
        $(".section7 .p1").animate({ opacity: 1 }, 5000, function () {
          $(".section7 .p1")
            .delay(1000)
            .animate({ opacity: 0 }, function () {
              $(".section7 .p2").animate({ opacity: 1 }, function () {
                $(".section7 .p2").delay(2000).animate({ opacity: 0 });
              });
            });
        });
        $(".section7 .contact").on("click", function () {
          $(".section7 .video1").hide();
          $(".section7 .contact").hide();
          $(".section7 .jingzhen").hide();
          $(".section7 .video2").show();
        });
      }
      if (index == 8) {
        // $(".section8 .p1").animate({ opacity: 1 }, function () {
        //   $(".section8 .p1").delay(2000).animate({ opacity: 0 });
        // });
        $(".section8 .p1").animate({ opacity: 1 }, 5000, function () {
          $(".section8 .p1")
            .delay(1000)
            .animate({ opacity: 0 })
            // .animate({ opacity: 0 }, function () {
            //   $(".section7 .p2").animate({ opacity: 1 }, function () {
            //     $(".section7 .p2").delay(2000).animate({ opacity: 0 });
            //   });
            // });
        });
        $(".section8 .contact").on("click", function () {
          $(".section8 .video1").hide();
          $(".section8 .contact").hide();
          $(".section8 .jingzhen").hide();
          $(".section8 .video2").show();
        });
      }
      if (index == 9) {
        $(".section9 .p1").animate({ opacity: 1 }, function () {
          $(".section9 .p1").delay(2000).animate({ opacity: 0 });
        });
        $(".section9 .contact").on("click", function () {
          $(".section9 .video1").hide();
          $(".section9 .contact").hide();
          $(".section9 .video2").show();
          $(".section9 h3").delay(3000).show();
        });
      }
      if (index == 10) {
        $(".section10 .p1").animate({ opacity: 1 }, function () {
          $(".section10 .p1").delay(2000).animate({ opacity: 0 });
        });
      }
      if (index == 11) {
       // $(".section11 .contact").animate({}, function () {
        // });
        $(".section11 .p1").animate({ opacity: 1 }, function () {
          $(".section11 .p1").delay(4000).animate({ opacity: 0 });
          $(".section11 .contact").delay(4000).fadeIn();
        });
        $(".section11 .contact").on("click", function () {
          $(".section11 .video1").hide();
          $(".section11 .contact").hide();
          $(".section11 .video2").show();
        });
      }
      // 城市关灯
      if (index == 12) {
        $(".section12 .p1").animate({ opacity: 1 }, function () {
          $(".section12 .p1")
            .delay(2000)
            .animate({ opacity: 0 }, function () {
              $(".section12 .p2").animate({ opacity: 1 }, function () {
                $(".section12 .p2")
                  .delay(2000)
                  .animate({ opacity: 0 }, function () {
                    $(".section12 .p3").animate({ opacity: 1 }, function () {
                      $(".section12 .p4")
                        .delay(1000)
                        .animate({ opacity: 1 }, function () {
                          $(".section12 .p5")
                            .delay(1000)
                            .animate({ opacity: 1 }, function () {
                              $(".section12 .contact").delay(500).fadeIn();
                            });
                        });
                    });
                  });
              });
            });
        });


        $(".section12 .contact").on("click", function () {
          // $(".section12 .video1").hide();
          $(".section12 .contact").hide();
          $(".section12 .video2").show();
        });
      }
      // 湿地
      if (index == 13) {
        $(".section13 .p1")
          .stop()
          .animate({ opacity: 1 }, function () {
            $(".section13 .p1")
              .delay(2000)
              .stop()
              .animate({ opacity: 0 }, function () {
                $(".section13 .p2")
                  .stop()
                  .animate({ opacity: 1 }, function () {
                    $(".section13 .p2")
                      .delay(2000)
                      .stop()
                      .animate({ opacity: 0 }, function () {
                        $(".section13 .p3")
                          .stop()
                          .animate({ opacity: 1 }, function () {
                            $(".section13 .p3")
                              .delay(2000)
                              .stop()
                              .animate({ opacity: 0 }, function () {
                                $(".section13 .contact").delay(4000).fadeIn();
                              });
                            
                          }).delay(2000);
                      }).delay(2000);
                  }).delay(2000);
              });
          });

        $(".section13 .contact").on("click", function () {
          $(".section13 .video1").hide();
          $(".section13 .contact").hide();
          $(".section13 .video2").show();
        });
      }
      if (index == 14) {
        // $(".section14 .p1")
        //   .stop()
        //   .animate({ opacity: 1 }, function () {
        //     $(".section14 .p1").delay(3000).stop().animate({ opacity: 0 });
        //   });
        $(".section14 .p1").animate({ opacity: 1 }, function () {
          $(".section14 .p1").delay(2000).animate({ opacity: 0 });
        });
      }
      if (index == 15) {
        // $(".section15 .p1")
        //   .stop()
        //   .animate({ opacity: 1 }, function () {
        //     $(".section15 .p1").delay(3000).stop().animate({ opacity: 0 });
        //   });
        $(".section15 .p1").animate({ opacity: 1 }, function () {
          $(".section15 .p1").delay(2000).animate({ opacity: 0 });
        });
      }
      if (index == 16) {
        $(".section16 .p1")
          .stop()
          .animate({ opacity: 1 }, function () {
            $(".section16 .p1").delay(3000).stop().animate({ opacity: 0 });
          });
      }
    },
  });
  // $(document).ready();
  $("audio")[0].play();
  // 第一屏封面 标题延时出现滑动
  $(".section1 .con").delay(2000).fadeIn(1000);
  $(".section1 .mouseScroll").delay(5000).stop().fadeIn(1000);
});
