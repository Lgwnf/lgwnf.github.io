var posts=["/wz/Adobe/","/wz/vpn2/","/wz/vpn/","/wz/Netflix/","/wz/vpn1/","/wz/gxscc/","/wz/czzpt/","/wz/gwsj/","/wz/Aegisub/","/wz/gwyy/","/wz/yxjb/","/wz/wp/","/wz/djyx/","/wz/Mark/","/wz/BT/","/wz/mrfz/","/wz/gwsp/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };