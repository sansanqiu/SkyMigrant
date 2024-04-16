const card_datas = [
    {
        src: '../img/handbook/db.png',
        id: 'NO.1284',
        name: '大鸨',
        text: '体形硕大的鸨，上体具有宽大的棕色和黑色横纹，下体及尾下覆羽白色，繁殖期雄鸟颈前具有状如胡须的白色丝状羽。',
        url: 'mythical animals/MA_1284.html',
    },
    {
        src: '../img/handbook/sqy.png',
        id: 'NO.4632',
        name: '中华秋沙鸭',
        text: '也称鳞胁秋沙鸭、唐秋沙。1989年被列为中国国家一级保护动物，是当时鸭科鸟类中唯一一种，也经常被称为“国鸭”。',
        url: 'mythical animals/MA_4632.html',
    },
    {
        src: '../img/handbook/xique.png',
        id: 'NO.8653',
        name: '喜鹊',
        text: '喜鹊是适应能力比较强的鸟类，在山区、平原都有栖息，无论是荒野、农田、郊区、城市都能看到它们的身影。',
        url: 'mythical animals/MA_8653.html',
    },
    {
        src: '../img/handbook/641.png',
        id: 'NO.2695',
        name: '黄端斑啄果鸟',
        text: '斑啄果鸟科（学名：Pardalotidae）也称斑食蜜鸟科，是雀形目的一个单型科，现仅存4种，分布于大洋洲，以昆虫为食。',
        url: 'mythical animals/MA_2695.html',
    },
    {
        src: '../img/handbook/642.png',
        id: 'NO.3819',
        name: '紫胸佛法僧',
        text: ' 紫胸佛法僧是肯尼亚国鸟，广泛分布在肯尼亚的各个保护区，是非洲分布最广的一种佛法僧。',
        url: 'mythical animals/MA_3819.html',
    },
    {
        src: '../img/handbook/643.png',
        id: 'NO.4327',
        name: '白胸翡翠',
        text: ' 又名苍翡翠，也叫白喉翡翠，是一种分布在亚洲南部和西部的翡翠。',
        url: 'mythical animals/MA_4327.html',
    },
    {
        src: '../img/handbook/644.png',
        id: 'NO.5710',
        name: '朱雀',
        text: '因羽毛呈鲜艳红色而得名。属名来自古希腊语“karpos”（水果）和“dakno”（咬）。',
        url: 'mythical animals/MA_5710.html',
    },
    {
        src: '../img/handbook/645.png',
        id: 'NO.7194',
        name: '白头海雕',
        text: '白头海雕，又名秃头海雕，俗称秀雕、秃头雕、白头雕，是分布于北美洲的大型猛禽。',
        url: 'mythical animals/MA_7194.html',
    },
    {
        src: '../img/handbook/646.png',
        id: 'NO.0545',
        name: '乌鸫',
        text: '被誉为世界上最聪明的鸟类。分布于中国除东北以外的大部分地区。该物种的模式产地在中国南部。其某些族群会迁往香港及老挝、越南等地过冬。',
        url: 'mythical animals/MA_0545.html',
    },
    {
        src: '../img/handbook/647.png',
        id: 'NO.9326',
        name: '矛隼',
        text: '又名海东青、鹘鹰，是隼属猛禽中最大的一种，分布在北极以及北美洲、亚洲的广大地区，在中国原产于黑龙江、吉林等地。',
        url: 'mythical animals/MA_9326.html',
    },
    {
        src: '../img/handbook/648.png',
        id: 'NO.5813',
        name: '蛎鹬',
        text: '蛎鹬在飞行中很明显，翅膀和尾巴有白色斑块，背部黑色，腹部白色。幼鸟棕色，脖子白色，喙颜色暗沉。叫声鲜明响亮。',
        url: 'mythical animals/MA_5813.html',
    },
    {
        src: '../img/handbook/649.png',
        id: 'NO.0895',
        name: '白鹇',
        text: '白鹇是中国广东省省鸟，栖息于季风常绿阔叶林、针阔混交林及马尾松林。',
        url: 'mythical animals/MA_0895.html',
    },
]
const handbook = {
    timer: '',
    // wave_speed: 10,
    wave_speed: -18,
    // wave_nums: 0,
    wave_nums: 300,
    show_card: document.getElementsByClassName("showbox-card")[0],
    cards: document.getElementsByClassName("card"),
    card_height: document.getElementsByClassName("card")[1].offsetTop - document.getElementsByClassName("card")[0].offsetTop,
    ifcan_scroll: false,
    scroll_distance: '',
    card_old: '',
    card_now: 0,
    card_scroll: function () {
        if (handbook.ifcan_scroll) {
            handbook.card_old = handbook.card_now;
            console.log(handbook.card_now);
            if (event.wheelDeltaY > 0) {
                handbook.scroll_distance += handbook.card_height;
                handbook.card_now--;
            }
            else {
                handbook.scroll_distance -= handbook.card_height;
                handbook.card_now++;
            }

            if (handbook.card_now < 0) { handbook.scroll_distance = handbook.card_now = 0; }
            else if (handbook.card_now > handbook.cards.length - 1) {
                handbook.card_now = handbook.cards.length - 1;
                handbook.scroll_distance = -(handbook.cards.length - 1) * handbook.card_height;
            }
            else {
                handbook.ifcan_scroll = false;
                d3.select(handbook.cards[handbook.card_now]).classed("card-checked", true)
                d3.select(handbook.cards[handbook.card_old]).classed("card-checked", false);
                handbook.showcard_change();
                console.log(handbook.card_now);
                d3.selectAll(".card")
                    .transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .style("transform", `translateY(${handbook.scroll_distance}px)`);
            }
        }
    },
    wave_animate: function () {
        handbook.wave_nums += handbook.wave_speed;
        if (handbook.wave_nums < 0) {
            cancelAnimationFrame(handbook.timer);
            handbook.wave_nums = 0;
            handbook.wave_speed = 10;
            handbook.ifcan_scroll = true
        }
        else {
            handbook.timer = window.requestAnimationFrame(handbook.wave_animate);
        }
        d3.select("#wave feDisplacementMap").attr("scale", handbook.wave_nums);

    },
    showcard_change: function () {
        window.requestAnimationFrame(handbook.wave_animate)
        d3.select(".showbox-card")
            .transition()
            .duration(200)
            .ease(d3.easeCubicInOut)
            .style("filter", "url(#wave) grayscale(1)")
            .transition()
            .on("end", function () {
                handbook.wave_speed = -18;
                let obj = card_datas[handbook.card_now];
                d3.select(handbook.show_card).select(".card-img img").attr("src", obj.src);
                d3.select(handbook.show_card).select(".card-text-head p:nth-child(1)").text(obj.name);
                d3.select(handbook.show_card).select(".card-text-head p:nth-child(2)").text(obj.id);
                d3.select(handbook.show_card).select(".card-text-body").text(obj.text);
            })
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "0")
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "1")
            .style("filter", "url(#wave) grayscale(0)")
    },
    show: function () {
        d3.select(".scroll-tips")
            .transition(300)
            .style("opacity", "1");
        d3.select(".handbook")
            .transition(1000)
            .style("transform", "scaleY(1)")
        setTimeout(function () {
            d3.select(".handbook")
                .style("transform", "rotateX(70deg) scale(0.6)")
        }, 1000)
        setTimeout(function () {
            d3.select(handbook.show_card)
                .style("display", "flex")
                .transition()
                .duration(1000)
                // .delay(500)
                .ease(d3.easeCubicInOut)
                .style("opacity", "1")
                .style("filter", "url(#wave) grayscale(0)");
            window.requestAnimationFrame(handbook.wave_animate)
            d3.select(handbook.cards[handbook.card_now]).classed("card-checked", true)
        }, 2000)
    },
    disapper: function () {
        d3.select(".scroll-tips")
            .transition(300)
            .style("opacity", "0");
        d3.select(handbook.show_card)
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "0")
        d3.select(".handbook")
            .style("transform", "rotateX(90deg) scale(0)");
        d3.select(".mouseicon")
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style("opacity", "0")
    },
    jumppage: function (e = card_datas[handbook.card_now].url) {
        handbook.disapper();
        menucontrol.menucolmun_diasapp();
        setTimeout(function () {
            location.href = e;
        }, 1200);
    },
};
function logojump_judge() {
    if (menucontrol.if_pageshow) { menucontrol.jumppage(4); }
    else { handbook.jumppage('../MAA_home.html') };
}
function mouseicon_show() {
    d3.select(".mouseicon")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("transform", "scale(1)")
}
function mouseicon_disapper() {
    d3.select(".mouseicon")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("transform", "scale(0)")
}
menucontrol.menucolmun_show();
window.addEventListener("mousemove", function () {
    d3.select(".mouseicon")
        .style("left", `${event.clientX}px`)
        .style("top", `${event.clientY}px`)
})
window.addEventListener("wheel", handbook.card_scroll);
window.onload = function () {
    d3.select(".handbook")
        .style("height", `${document.getElementsByClassName("cardbox")[0].offsetHeight}px`)
        .style("transform", "scaleY(0)")
        .transition(100)
        .on("end", function () {
            handbook.show()
        })
        .style("transition", "1s ease");
};