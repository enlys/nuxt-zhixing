<template>
  <div style="width:100%;">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div
            v-video-player:myVideoPlayer="playerOptions"
            :playsinline="playsinline"
            class="video-player-box vjs-big-play-centered"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @ready="playerReadied"
            @statechanged="playerStateChanged($event)"
          />
        </div>
        <div class="titlt">{{title}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  components: {
    // videoPlayer
  },
  //   layout: "home",
  data() {
    return {
      playsinline: true,
      playerOptions: {
        muted: true,
        controls: true,
        language: "lang",
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速率
        sources: [
          {
            type: "video/mp4",
            src: this.$route.query.src //视频流地址
          }
        ],
        hls: true, //启用hls？
        fluid: true, //设置播放器为流体  宽度为外层盒子大小  ps：想设置width：100%找不到方法？这个就对了
        poster: ""
      },
      title: this.$route.query.title,
      src: this.$route.query.src
    };
  },

  mounted() {
    console.log(this.$route);
    this.playerOptions = {
      playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
      autoplay: false, //如果true,浏览器准备好时开始回放。
      muted: false, // 默认情况下将会消除任何音频。
      loop: false, // 导致视频一结束就重新开始。
      preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: "zh-CN",
      aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      sources: [
        {
          src: this.src, // 路径
          type: "video/mp4" // 类型
        }
      ],
      poster: "", //你的封面地址
      // width: document.documentElement.clientWidth,
      notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true //全屏按钮
      }
    };
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log(playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>

<style lang="scss" scoped>
.titlt {
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
  background: #f8f8f8;
}
</style>

