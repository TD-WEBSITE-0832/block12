let yoshStr = prompt("Yoshingiz nechida Bro ?:");
    
    if (!yoshStr || yoshStr.trim() === "") {
        alert("Yoshingiz nechida Bro ?");
        window.location = "https://dodge-maize-68563100.figma.site/";
    } else {
        let yosh = Number(yoshStr);
        if (isNaN(yosh) || yosh < 18) {
            alert("Siz oldin !8 yoshga tolib keling  and kiring website mizga");
            window.location = "Next2.html";
        } else {
            alert("Yaxshi Kira vering webstie mizga");
            // document.p.innerHTML = "<p style='color:#0f0;text-align:center'>Hudud ni Kengaytirsh Texnikasi</p>";
        }
    }




// let reset = document.querySelector(".reset");

// Object.assign(reset, {
//   window:window.location.href = ".html"
// })


