<template>
  <div class="subnav">
    <ul class="navbar">
      <li>
        <a data-act="subnav-click" data-val="{subnavClick:1}" href="?showTab=1"
          >热点首页</a
        >
      </li>
      <li>
        <a
          data-act="subnav-click"
          data-val="{subnavClick:2}"
          data-state-val="{subnavId:2}"
          class="active"
          href="javascript:void(0)"
        >
          新闻资讯</a
        >
      </li>
      <li>
        <a data-act="subnav-click" data-val="{subnavClick:3}" href="?showTab=3"
          >预告片</a
        >
      </li>
    </ul>
  </div>
  <div class="container" id="app">
    <div class="hotIndex-container">
      <div class="index-news-container clearfix">
        <div class="popular-container">
          <h4 class="red">热门资讯</h4>
          <ul>
            <li class="top1-list">
              <div>
                <div class="top-info-thumb">
                  <a
                    href="/films/news/12071404"
                    target="_blank"
                    data-act="news-click"
                    data-val="{newsid:12071404}"
                  >
                    <img src="../../assets/imges/明日战记.jpg" alt="" />
                    <i class="ranking top-info-icon red-bg">1</i>
                  </a>
                </div>
                <p class="top1-news-content">
                  <a
                    href="/films/news/12071404"
                    class="two-line"
                    title="《明日战记》举办香港群星慈善首映礼，刘嘉玲鼓励古天乐放胆去做"
                    >《明日战记》举办香港群星慈善首映礼，刘嘉玲鼓励古天乐放胆去做</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking red">2</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/12071647"
                    target="_blank"
                    data-act="news-click"
                    data-val="{newsid:12071647}"
                    >《新神榜：杨戬》曝系列联动彩蛋，哪吒孙悟空惊喜现身</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking red">3</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11799618"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11799618}"
                    >《新神榜：杨戬》发敦煌博物馆联动海报，梦幻再现国风之美</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">4</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11769972"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11769972}"
                    >《罚罪》今晚开播！黄景瑜杨祐宁正邪交锋身份三度反转</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">5</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11948008"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11948008}"
                    >电影《深海蛇难》定档8月27日，人蛇博弈狂暴来袭</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">5</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11948008"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11948008}"
                    >电影《深海蛇难》定档8月27日，人蛇博弈狂暴来袭</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">6</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11923673"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11923673}"
                    >电影《拯救嫌疑人》发布先导海报，全阵容曝光共同“寻觅真相”</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">7</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11814664"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11814664}"
                    >《世界上最爱我的人》曝陪伴版MV，年度催泪亲情力作明日上映</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">8</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/12198768"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:12198768}"
                    >电影《雀斑公主》倒计时2天，元宇宙迎新派对邀您入场！</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">9</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11814459"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11814459}"
                    >《狼群》曝新预告境外势力挑衅能源命脉，张晋领衔反恐精英背水一战</a
                  >
                </p>
              </div>
            </li>
            <li>
              <div class="normal-link">
                <i class="ranking">10</i>
                <p class="top10-news-content">
                  <a
                    href="/films/news/11769780"
                    target="_blank"
                    data-act="news-click"
                    data-val="{new sid:11769780}"
                    >《青春动画大片《雀斑公主》明日上映，终极预告诠释元宇宙少女蜕变</a
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="latest-container">
          <h4 class="latest-header red">
            "最新资讯"
            <a href="?showTab=2" class="all-latest" data-act="all-news-click">
              "全部"
              <span class="arrow red-arrow"></span>
            </a>
          </h4>
          <div class="latest-content clearfix">
            <div class="latest-news-box">
              <a
                href="/films/news/13310424"
                target="_blank"
                data-act="news-click"
                data-val="{news id:13310424}"
              >
                <img
                  src="https://p0.pipi.cn/friday/c60df0ad6ed6e7b9e1c24a30dbf7411e.jpg?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13310424"
                  class="two-line"
                  title="《对我而言危险的他》李墨之樊治欣深陷豪门迷局"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:13310424}"
                >
                  《对我而言危险的他》李墨之樊治欣深陷豪门迷局
                </a>
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">256</span>
              </div>
            </div>
            <div class="latest-news-box">
              <a
                href="/films/news/13267065"
                target="_blank"
                data-act="news-click"
                data-val="{news id:13267065}"
              >
                <img
                  src="https://p0.pipi.cn/friday/55bae6d89845aa069d7d829809716de5.jpg?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13267065"
                  class="two-line"
                  title="《风再起时》集结豪华阵容，郭富城梁朝伟领衔全阵容眼神带“刀”"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:13267065}"
                  >《风再起时》集结豪华阵容，郭富城梁朝伟领衔全阵容眼神带“刀”</a
                >
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">509</span>
              </div>
            </div>
            <div class="latest-news-box">
              <a
                href="/films/news/13043794"
                target="_blank"
                data-act="news-click"
                data-val="{news id:13043794}"
              >
                <img
                  src="https://p0.pipi.cn/friday/63fd136cc738c675c17c5b06eca69f37.jpeg?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13043794"
                  class="two-line"
                  title="合家欢喜剧《交换人生》成长推广曲《十八》暖心上线"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:13043794}"
                  >《合家欢喜剧《交换人生》成长推广曲《十八》暖心上线</a
                >
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">702</span>
              </div>
            </div>
            <div class="latest-news-box">
              <a
                href="/films/news/13227573"
                target="_blank"
                data-act="news-click"
                data-val="{news id:13227573}"
              >
                <img
                  src="https://p0.pipi.cn/friday/af76ce3809fada958632dfe4b9b0c019.jpg?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13227573"
                  class="two-line"
                  title="《雷霆沙赞！众神之怒》定档3月17日，DC超英全面升级
                  target"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:13227573}"
                  >《雷霆沙赞！众神之怒》定档3月17日，DC超英全面升级</a
                >
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">1234</span>
              </div>
            </div>
            <div class="latest-news-box">
              <a
                href="/films/news/1330136"
                target="_blank"
                data-act="news-click"
                data-val="{news id:1330136}"
              >
                <img
                  src="https://p0.pipi.cn/friday/5bf3c82713e507e2af72f6652cdaee58.png?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13330136"
                  class="two-line"
                  title="《我的老板为何那样》定档2月3日，非典型霸总甜宠轻喜来袭"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:1330136}"
                  >《我的老板为何那样》定档2月3日，非典型霸总甜宠轻喜来袭</a
                >
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">970</span>
              </div>
            </div>
            <div class="latest-news-box">
              <a
                href="/films/news/13198578"
                target="_blank"
                data-act="news-click"
                data-val="{news id:13198578}"
              >
                <img
                  src="https://obj.pipi.cn/content-platform/opt/sphinx_statics/images/upload_74d9912487afb750fdc16d0413d01543.jpeg?imageView2/1/w/230/h/129"
                  alt=""
                />
              </a>
              <p class="latest-news-title">
                <a
                  href="/films/news/13198578"
                  class="two-line"
                  title="IMAX发布《蚁人与黄蜂女：量子狂潮》视觉，漫威宇宙回归引爆IMAX"
                  target="_blank"
                  data-act="news-click"
                  data-val="{news id:13198578}"
                  >IMAX发布《蚁人与黄蜂女：量子狂潮》视觉，漫威宇宙回归引爆IMAX</a
                >
              </p>
              <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">862</span>
              </div>
            </div>
          </div>
          <div class="index-videos-container clearfix">
            <div class="popular-container">
              <h4 class="blue">热门预告片</h4>
              <ul>
                <li class="top-list">
                  <div>
                    <div class="top-info-thumb">
                      <a
                        href="http://imovie.pipi.cn/films/1462626/preview?videoId=493716"
                        target="_blank"
                        data-act="video-click"
                        data-val="{videoId:493716}"
                      >
                        <img
                          src="https://obj.pipi.cn/prevue/tmp/upload_48bc5d0e1d258e1c01676f1cab9532f4.jpeg?imageView2/1/w/120/h/68"
                          alt=""
                        />
                        <i class="ranking top-info-icon orange-bg">1</i>
                        <i class="play-icon"></i>
                      </a>
                    </div>
                    <div class="top5-video-info">
                      <p class="one-line">
                        <a
                          href="http://imovie.pipi.cn/films/1462626/preview?videoId=493716"
                          target="_blank"
                          data-act="video-click"
                          data-val="{videoId:493716}"
                        >
                          "《满江红》张艺谋电影《满江红》曝“朱颜风骨"版预告
                          新人演员王佳怡演绎家国大义撬动人心
                        </a>
                      </p>
                      <div class="video-view">
                        <span class="video-play-count"> "488.6万" </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="top-list">
                  <div>
                    <div class="top-info-thumb">
                      <a
                        href="http://imovie.pipi.cn/films/343521/preview?videoId=493304"
                        target="_blank"
                        data-act="video-click"
                        data-val="{videoId:493304}"
                      >
                        <img
                          src="https://p0.pipi.cn/friday/8042d8079b984904518a851bc40fea61.jpg?imageView2/1/w/120/h/68"
                          alt=""
                        />
                        <i class="ranking top-info-icon orange-bg">2</i>
                        <i class="play-icon"></i>
                      </a>
                    </div>
                    <div class="top5-video-info">
                      <p class="one-line">
                        <a
                          href="http://imovie.pipi.cn/films/343521/preview?videoId=493304"
                          target="_blank"
                          data-act="video-click"
                          data-val="{videoId:493304}"
                        >
                          《深海》电影《深海》终极预告，预售已开！孤独的人，我们一同前行
                        </a>
                      </p>
                      <div class="video-view">
                        <span class="video-play-count"> "1342.8万" </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="top-list">
                  <div>
                    <div class="top-info-thumb">
                      <a
                        href="http://imovie.pipi.cn/films/1479130/preview?videoId=493347"
                        target="_blank"
                        data-act="video-click"
                        data-val="{videoId:493347}"
                      >
                        <img
                          src="https://p0.pipi.cn/friday/994aeed18cb3026551317b0baefa9e25.png?imageView2/1/w/120/h/68"
                          alt=""
                        />
                        <i class="ranking top-info-icon orange-bg">3</i>
                        <i class="play-icon"></i>
                      </a>
                    </div>
                    <div class="top5-video-info">
                      <p class="one-line">
                        <a
                          href="http://imovie.pipi.cn/films/1479130/preview?videoId=493347"
                          target="_blank"
                          data-act="video-click"
                          data-val="{videoId:493347}"
                        >
                          "《熊出没·伴我“熊芯”》《熊出没·伴我“熊芯”》"终极预告
                          熊大熊二开启找妈妈大冒险
                        </a>
                      </p>
                      <div class="video-view">
                        <span class="video-play-count"> "1129.6万" </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="top-list">
                  <div>
                    <div class="top-info-thumb">
                      <a
                        href="http://imovie.pipi.cn/films/1366696/preview?videoId=493502"
                        target="_blank"
                        data-act="video-click"
                        data-val="{videoId:493502}"
                      >
                        <img
                          src="https://p0.pipi.cn/friday/4991ad32467f85e73e6198125551dfa8.jpg?imageView2/1/w/120/h/68"
                          alt=""
                        />
                        <i class="ranking top-info-icon orange-bg">4</i>
                        <i class="play-icon"></i>
                      </a>
                    </div>
                    <div class="top5-video-info">
                      <p class="one-line">
                        <a
                          href="http://imovie.pipi.cn/films/1366696/preview?videoId=493502"
                          target="_blank"
                          data-act="video-click"
                          data-val="{videoId:493502}"
                        >
                          《流浪地球2》“凡是过往，皆为序章”电影《流浪地球2》发布终极预告
                        </a>
                      </p>
                      <div class="video-view">
                        <span class="video-play-count"> "1347.8万" </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="top-list">
                  <div>
                    <div class="top-info-thumb">
                      <a
                        href="http://imovie.pipi.cn/films/1415196/preview?videoId=493540"
                        target="_blank"
                        data-act="video-click"
                        data-val="{videoId:493540}"
                      >
                        <img
                          src="https://p0.pipi.cn/friday/722c186b91e44ecf3792fe06182065ad.jpg?imageView2/1/w/120/h/68"
                          alt=""
                        />
                        <i class="ranking top-info-icon orange-bg">5</i>
                        <i class="play-icon"></i>
                      </a>
                    </div>
                    <div class="top5-video-info">
                      <p class="one-line">
                        <a
                          href="http://imovie.pipi.cn/films/1415196/preview?videoId=493540"
                          target="_blank"
                          data-act="video-click"
                          data-val="{videoId:493540}"
                        >
                          《无名》《无名》“仔细看”预告 梁朝伟王一博终极交锋
                        </a>
                      </p>
                      <div class="video-view">
                        <span class="video-play-count"> "524.9万" </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="latest-container">
              <h4 class="latest-header blue">
                "预告片速递"
                <a
                  href="?showTab=3"
                  class="all-latest"
                  data-act="all-videos-click"
                >
                  "全部"
                  <span class="arrow blue-arrow"></span>
                </a>
              </h4>
              <div class="latest-video-box latest-video-big">
                <a
                  href="http://imovie.pipi.cn/films/1279458/preview?videoId=493880"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493880}"
                >
                  <img
                    src="https://p0.pipi.cn/friday/8321bf79a808a1edac7148d480fec87f.jpg?imageView2/1/w/480/h/270"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《雷霆沙赞！众神之怒》《雷霆沙赞！众神之怒》主创定档亮相预告</span
                      >
                    </p>
                    <p><span class="video-play-count">"1248"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
              <div class="latest-video-box">
                <a
                  href="http://imovie.pipi.cn/films/1287540/preview?videoId=493860"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493860}"
                >
                  <img
                    src="https://obj.pipi.cn/content-platform/opt/sphinx_statics/images/upload_066ab2a667c527d19b6dd8277d90032b.png?imageView2/1/w/230/h/125"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《蚁人与黄蜂女：量子狂潮》英雄无论大小不论出处</span
                      >
                    </p>
                    <p><span class="video-play-count">"1248"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
              <div class="latest-video-box">
                <a
                  href="http://imovie.pipi.cn/films/1471788/preview?videoId=493857"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493857}"
                >
                  <img
                    src="https://p0.pipi.cn/friday/84d79dddd762c0ad31f6a4f1d4d172f9.jpg?imageView2/1/w/230/h/125"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《那人那事那岁月》《那人那事那岁月》宣传片</span
                      >
                    </p>
                    <p><span class="video-play-count">"380"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
              <div class="latest-video-box">
                <a
                  href="http://imovie.pipi.cn/films/1287540/preview?videoId=493856"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493856}"
                >
                  <img
                    src="https://obj.pipi.cn/prevue/13f6ef21ed2563424f7928f7d099f496.png?imageView2/1/w/230/h/125"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《蚁人与黄蜂女：量子狂潮》《蚁人与黄蜂女：量子狂潮》搭档再度集结，直面最强劲敌，2月17日，席卷大银幕</span
                      >
                    </p>
                    <p><span class="video-play-count">"181"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
              <div class="latest-video-box">
                <a
                  href="http://imovie.pipi.cn/films/1218073/preview?videoId=493855"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493855}"
                >
                  <img
                    src="https://p0.pipi.cn/friday/4b275963f399388bbde0b6668ed27b36.png?imageView2/1/w/230/h/125"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《黑豹2》黑豹永远守护瓦坎达，传奇永不落幕</span
                      >
                    </p>
                    <p><span class="video-play-count">"68327"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
              <div class="latest-video-box">
                <a
                  href="http://imovie.pipi.cn/films/1279458/preview?videoId=493853"
                  target="_blank"
                  data-act="video-click"
                  data-val="{videoId:493853}"
                >
                  <img
                    src="https://p0.pipi.cn/friday/f3abc783b5fec5ef12ee29af795d2118.jpg?imageView2/1/w/230/h/125"
                    alt=""
                  />
                  <div class="latest-video-info">
                    <p class="one-line">
                      <span class="latest-video-title"
                        >《雷霆沙赞！众神之怒》《雷霆沙赞！众神之怒》定档3月17日！全面升级爽翻大银幕</span
                      >
                    </p>
                    <p><span class="video-play-count">"3187"</span></p>
                  </div>
                  <i class="play-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
div {
  display: block;
}
.subnav {
  background-color: #47464a;
  height: 60px;
  width: 100%;
  min-width: 1200px;
  text-align: center;
}
.subnav .navbar {
  display: inline-block;
  overflow: hidden;
}
.subnav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.subnav .navbar li a {
  display: block;
  font-size: 16px;
  color: #999;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
}
a {
  text-decoration: none;
  background-color: transparent;
}
a:-webkit-any-link {
  cursor: pointer;
}
.subnav li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  text-align: -webkit-match-parent;
  display: list-item;
}
.subnav .navbar li {
  display: inline-block;
  float: left;
}
.popular-container {
  float: right;
  width: 360px;
  font-size: 14px;
}
.latest-content {
  margin-right: -20px;
}
.clearfix:after {
  content: "";
  overflow: hidden;
  clear: both;
  display: block;
}
.latest-container {
  width: 730px;
  margin-right: 0;
}
.hotIndex-container h4 {
  font-size: 26px;
  line-height: 1;
  margin-bottom: 20px;
}
.red {
  color: #ef4238;
}
h4 {
  font-weight: 400;
  margin: 0;
  display: block;
  margin-block-end: 1.33em;
  margin-block-start: 1.33em;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
}
.latest-header a {
  font-size: 14px;
  color: inherit;
  float: right;
  margin-top: 10px;
}
a:-webkit-any-link {
  cursor: pointer;
}
.hotIndex-container h4 {
  line-height: 1;
}
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  content: "";
  overflow: hidden;
  clear: both;
  display: block;
}
.latest-news-box {
  width: 230px;
  height: 195px;
  float: left;
  margin: 0 20px 20px 0;
}
.blue {
  color: #2d98f3;
}
.popular-container {
  float: right;
  width: 360px;
  font-size: 14px;
}
.top-list {
  margin-bottom: 20px;
}
ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.index-videos-container {
  margin-top: 40px;
}
.latest-video-box {
  float: left;
  margin: 0 20px 20.1px 0;
  position: relative;
}
html {
  -webkit-text-size-adjust: 100%;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
