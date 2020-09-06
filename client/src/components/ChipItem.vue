<template>
  <div :class="'battle-chip ' +  this.chipBackgroundClass">
    <svg viewBox="0 0 46.63 69.83">
      <path
        class="frame"
        d="M44.85,0h-2.8a1,1,0,0,0-1,1v.1h1.35v2.4H7.5V1.12H8.84V1a1,1,0,0,0-1-1H3.42A3.47,3.47,0,0,0,0,3.52V58.67H1.19v3.5H0v6.48a1.19,1.19,0,0,0,2.38,0V53.73H44.25V68.65a1.19,1.19,0,0,0,2.38,0V62.17H45.44v-3.5h1.19V1.82A1.81,1.81,0,0,0,44.85,0Z"
      />
      <g>
        <rect class="board-bg" x="2.38" y="53.73" width="41.88" height="15.19" />
        <rect x="2.38" y="53.73" width="1.25" height="15.19" />
        <rect x="4.76" y="53.73" width="1.25" height="15.19" />
        <rect x="7.15" y="53.73" width="1.25" height="15.19" />
        <rect x="9.54" y="53.73" width="1.25" height="15.19" />
        <rect x="11.93" y="53.73" width="1.25" height="15.19" />
        <rect x="14.32" y="53.73" width="1.25" height="15.19" />
        <rect x="16.71" y="53.73" width="1.25" height="15.19" />
        <rect x="19.1" y="53.73" width="1.25" height="15.19" />
        <rect x="21.49" y="53.73" width="1.25" height="15.19" />
        <rect x="23.88" y="53.73" width="1.25" height="15.19" />
        <rect x="26.27" y="53.73" width="1.25" height="15.19" />
        <rect x="28.66" y="53.73" width="1.25" height="15.19" />
        <rect x="31.05" y="53.73" width="1.25" height="15.19" />
        <rect x="33.44" y="53.73" width="1.25" height="15.19" />
        <rect x="35.83" y="53.73" width="1.25" height="15.19" />
        <rect x="38.22" y="53.73" width="1.25" height="15.19" />
        <rect x="40.61" y="53.73" width="1.25" height="15.19" />
        <rect x="43" y="53.73" width="1.25" height="15.19" />
      </g>
      <g>
        <polygon
          class="frame-effects"
          points="0 18.02 0 19.06 2 19.06 2 34.58 0 34.58 0 35.61 3 35.61 3 18.02 0 18.02"/>

        <circle class="frame-effects" cx="3.77" cy="9.97" r="2.13" />
      </g>
      <g>
        <rect class="board-bg" x="34.08" y="44.92" width="8.29" height="5.17" rx="0.57" ry="0.57" />
        <text class="number-text" transform="translate(34.88 49.02)">{{this.chipNumberText}}</text>
      </g>
      <g class="chip-content">
        <path
          :class="this.chipClasseColor"
          d="M7.5,1.08V40.35a1.39,1.39,0,0,0,1.4,1.4H41a1.4,1.4,0,0,0,1.4-1.4V1.08Z"/>

        <polygon
          points="38.6 2.83 11.27 2.83 9.21 4.74 9.21 37.93 11.27 39.75 38.6 39.75 40.66 37.93 40.66 4.74 38.6 2.83"/>

        <text
          :class="this.isSupportChip(this.battleChip.Type) ? 'chip-title-text support' : 'chip-title-text'"
        >{{this.chipTitleText}}</text>

        <image
          width="56"
          height="48"
          transform="translate(12 9.97) scale(0.46 0.47)"
          :xlink:href="this.chipIcon"/>

        <text class="chip-name-text">{{this.battleChip.Name}}</text>
        <g class="chip-element">
          <rect fill="#fff" x="11.98" y="34.22" width="3.97" height="3.97" rx="0.25" ry="0.25" />
          <rect x="12.34" y="34.57" width="3.26" height="3.26" rx="0.21" ry="0.21" />

          <g class="neutral-element" v-if="this.battleChip.Element === 'Neutral'">
            <rect fill="#fff" x="13.4" y="35.6" width="1.18" height="1.18" />
          </g>

          <g class="fire-element" v-if="this.battleChip.Element === 'Fire'">
            <path class="blaze-bg" d="M14,35l-.16.28c-.1.16-.21.35-.26.42s-.55.38-.61.57a.8.8,0,0,0,.4.94,2.12,2.12,0,0,0,1.23.07l.08-.06a1,1,0,0,0,.09-1.14,3,3,0,0,1,0-.61,1.6,1.6,0,0,1,.12-.47.88.88,0,0,0-.57.27c-.06.07-.21.29-.31.28A1.76,1.76,0,0,1,14,35Z" />
            <path class="blaze-stroke-bg" d="M14,35l-.16.28c-.1.16-.21.35-.26.42s-.55.38-.61.57a.8.8,0,0,0,.4.94,2.12,2.12,0,0,0,1.23.07l.08-.06a1,1,0,0,0,.09-1.14,3,3,0,0,1,0-.61,1.6,1.6,0,0,1,.12-.47.88.88,0,0,0-.57.27c-.06.07-.21.29-.31.28A1.76,1.76,0,0,1,14,35Z" />
            <path class="blaze-inner-bg" d="M13.42,37.18a1.22,1.22,0,0,0,.5.12,1.35,1.35,0,0,0,.71-.06.57.57,0,0,0,.11-.33.77.77,0,0,0-1.52,0,.57.57,0,0,0,0,.13A.54.54,0,0,0,13.42,37.18Z" />
          </g>
          <g class="elec-element" v-if="this.battleChip.Element === 'Elec'">
             <polygon points="14.17 34.83 12.67 36.18 13.61 36.18 12.86 37.7 15.36 35.57 14.05 35.55 14.17 34.83" />
          </g>
          <g class="aqua-element" v-if="this.battleChip.Element === 'Aqua'">
            <path class="tear-bg" d="M14,35l-.52.52c-.16.15-.07.74.52.74a.5.5,0,0,0,.49-.75C14.21,35.23,14,35,14,35Z" />
            <circle cx="13.65" cy="35.59" r="0.08" />
            <path class="tear-shadow-bg" d="M14.45,35.79a.34.34,0,0,1-.34.36" />

            <path class="tear-bg" d="M13.43,36.11s-.13.14-.51.51c-.17.16-.08.74.52.74a.49.49,0,0,0,.48-.74C13.63,36.33,13.43,36.11,13.43,36.11Z" />
            <circle cx="13.07" cy="36.69" r="0.08" />
            <path class="tear-shadow-bg" d="M13.87,36.89a.34.34,0,0,1-.34.36" />

            <path class="tear-bg" d="M14.62,36.11s-.13.14-.51.51c-.17.16-.08.74.52.74a.48.48,0,0,0,.48-.74C14.82,36.33,14.62,36.11,14.62,36.11Z" />
            <circle cx="14.26" cy="36.69" r="0.08" />
            <path class="tear-shadow-bg" d="M15.06,36.89a.33.33,0,0,1-.33.36" />
          </g>
          <g class="wood-element" v-if="this.battleChip.Element === 'Wood'">
            <path class="leaf-bg" d="M15.27,35a3.64,3.64,0,0,0-1.21,0,2.18,2.18,0,0,0-1,.81,6.27,6.27,0,0,0-.19,1.31c0,.08-.19.41-.17.4s.29-.17.37-.19a7,7,0,0,0,1.31-.2,2.31,2.31,0,0,0,.8-.95A2.72,2.72,0,0,0,15.27,35Z" />
            <line class="leaf-shadow-bg" x1="13.19" y1="37.09" x2="15.04" y2="35.19" />
            <path class="leaf-shadow-bg" d="M13.32,36.27c0,.35.11.58.12.52" />
            <path class="leaf-shadow-bg" d="M14,37c-.34,0-.58-.09-.52-.11" />
            <path class="leaf-shadow-bg" d="M13.87,35.69c0,.35.12.58.13.52" />
            <path class="leaf-shadow-bg" d="M14.58,36.37c-.34.05-.58-.09-.52-.11" />
            <path class="leaf-shadow-bg" d="M14.48,35.07c0,.35.11.59.12.52" />
            <path class="leaf-shadow-bg" d="M15.18,35.75c-.34,0-.58-.09-.52-.1" />
          </g>          
        </g>
      </g>
    </svg>
    <div class="holographic-effect-container">
      <div
        class="shine"
        v-for="(item, index) in this.shinyItems"
        :key="index"
        :style="{ '-webkit-animation-delay': item.delay,
                      'mozAnimationDelay': item.delay,
                      'top': item.top,
                      'left': item.left  }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ChipClasses, ChipTypes } from "@/common/constants.js";

export default {
  name: "ChipItem",
  props: {
    battleChip: {
      required: true
    }
  },
  watch: {
    battleChip: {
      handler() {
        this.updateData();
      },
      deep: true
    }
  },
  data() {
    return {
      chipBackgroundClass: String,
      chipNumberText: String,
      chipClasseColor: String,
      chipTitleText: String,
      chipIcon: String,
      shinyItems: []
    };
  },
  mounted() {
    this.updateData();
  },
  methods: {
    zeroPad: function(value, count) {
      let numZeropad = value + "";
      while (numZeropad.length < count) {
        numZeropad = "0" + numZeropad;
      }
      return numZeropad;
    },
    isSupportChip: function(value) {
      return value === ChipTypes.Support;
    },
    updateData() {
      this.shinyItems = []; //Clean the shiny effect

      this.chipNumberText = this.zeroPad(this.battleChip.Id, 3);
      this.chipIcon = require(`../assets/chips/chip${this.chipNumberText}.png`);

      if (this.battleChip.Classe !== ChipClasses.Navi) {
        this.chipBackgroundClass = "default-bg";
        this.chipTitleText = "BATTLE CHIP";

        switch (this.battleChip.Classe) {
          case ChipClasses.Standard:
            this.chipClasseColor = "standard-classe";
            break;
          case ChipClasses.Mega:
            this.chipClasseColor = "mega-classe";
            break;
          case ChipClasses.Giga:
            this.chipClasseColor = "giga-classe";
            break;
        }
      } else {
        this.chipTitleText = "NAVI CHIP";
        this.chipClasseColor = "standard-classe";
        this.chipBackgroundClass = "navi chip-" + this.chipNumberText + "-bg"; //Get special navi chip bg
      }
    }
  }
};
</script>

<style scoped lang="scss">
.fire-element {
  .blaze-bg {
    fill:#f44951;
  }
  .blaze-stroke-bg {
    stroke:#fff;
    stroke-width:0.26px;
    fill:none;
    stroke-miterlimit:10;
  }
  .blaze-inner-bg {
    fill:#f2da50;
  }
}

.elec-element {
  polygon {
    fill:#f8f028;
  }
}

.aqua-element {
  .tear-bg {
    fill:#5880f8;
  }
  .circle, .tear-shadow-bg  {
    fill:#cadafc;
  }

  .tear-shadow-bg{
    fill:none;
    stroke-miterlimit:10;
    stroke:#cadafc;
    stroke-width:0.1px;
  }
}

.wood-element {
  .leaf-bg {
    fill:#30c858;
  }

  .leaf-shadow-bg {
    stroke:#00b22a;
    stroke-width:0.5px;
    fill:none;
    stroke-miterlimit:10;
  }
}

.selected {
  display: block;
}

.battle-chip {
  // width: 139px;
  width: 110px;
  // height: 208px;
  height: 164px;

  .chip-title-text {
    font-family: BN Elements;
    font-size: 3.5px;
    fill: #f0f568;

    &.support {
      fill: #6893f5;
    }
  }
  
  .board-bg {
    fill: #825b40;
  }

  .standard-classe {
    fill: #d9dfef;
  }
  .mega-classe {
    fill: #9cbbda;
  }
  .giga-classe {
    fill: #f2a2a2;
  }

  .number-text {
    font-size: 3px;
    font-family: Advanced Pet Font;
  }
  .chip-name-text {
    font-family: BN Elements;
    font-size: 3.80px;
    fill: #fff;
    transform: translate(16.73px, 37.58px) scale(1.03, 1);
  }

  &.default-bg {
    .frame {
      fill: #708bba;
    }
    .frame-effects {
      fill: #616d97;
    }
    .chip-title-text {
      transform: translate(11.6px, 7.17px) scale(1.03, 1);
    }
    .chip-element {
      display: block;
    }
  }

  &.navi {
    .chip-title-text {
      transform: translate(15px, 7.17px) scale(1.03, 1);
    }
    .chip-element {
      display: none;
    }
    .chip-name-text {
      transform: translate(11.98px, 37.58px) scale(1.03, 1);
    }  

    .holographic-effect-container {
      width: 83px;
      height: 96px;
      position: relative;
      margin-left: 17px;
      margin-top: -162px;
      overflow: hidden;
      background: linear-gradient(90deg, rgba(148,148,148,0.4) 0%, rgba(103,102,102,0.4) 100%);
      background-size: 100%;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }

      &::after {
        background-image: url("../assets/holo_pattern.png");
        background-position: center;
        background-size: 100%;
        z-index: 1;
        opacity: 0.6;
        mix-blend-mode: overlay;
      }

      &::before {
        opacity: 0.5;
        background-image: linear-gradient(
          -45deg,
          transparent 0%,
          rgb(0, 231, 255) 30%,
          rgb(255, 0, 231) 70%,
          transparent 100%
        );
        background-size: 400% 400%;
        animation: holographic 5s ease infinite;
        mix-blend-mode: color-burn;
        z-index: 2;
      }
    }

    /*MegaMan background */
    &.chip-313-bg {
      .frame {
        fill: #0B58BD;
      }
      .frame-effects {
        fill: #0a4798;
      }
    }  

    /*Roll background */
    &.chip-314-bg {
      .frame {
        fill: #F9A2B9;
      }
      .frame-effects {
        fill: #F7779F;
      }
    }    

    /*Gutsman background */
    &.chip-315-bg {
      .frame {
        fill: #FFF86D;
      }
      .frame-effects {
        fill: #f9ed04;
      }
    } 

    /*Windman background */
    &.chip-316-bg {
      .frame {
        fill: #04B7CA;
      }
      .frame-effects {
        fill: #0398a8;
      }
    }    

    /*Searchman background */
    &.chip-317-bg {
      .frame {
        fill: #6B9E57;
      }
      .frame-effects {
        fill: #568046;
      }
    }      

     /*Fireman background */
    &.chip-318-bg {
      .frame {
        fill: #a21616;
      }
      .frame-effects {
        fill: #680808;
      }
    }    

    /*thunderman background */
    &.chip-319-bg {
      .frame {
        fill: #eff585;
      }
      .frame-effects {
        fill: #d8de75;
      }
    }  

    /*ProtoMan background */
    &.chip-320-bg {
      .frame {
        fill: #d63a2b;
      }
      .frame-effects {
        fill: #a01a11;
      }
    }

    /*Numberman background */
    &.chip-321-bg {
      .frame {
        fill: #A4C89A;
      }
      .frame-effects {
        fill: #84a07c;
      }
    }

    /*Metalman background */
    &.chip-322-bg {
      .frame {
        fill: #B6B3AE;
      }
      .frame-effects {
        fill: #9a9793;
      }
    }

    /*Junkman background */
    &.chip-323-bg {
      .frame {
        fill: #67553D;
      }
      .frame-effects {
        fill: #483c2b;
      }
    }

    /*Aquaman background */
    &.chip-324-bg {
      .frame {
        fill: #8DB4CD;
      }
      .frame-effects {
        fill: #7291a5;
      }
    }

    /*Woodman background */
    &.chip-325-bg {
      .frame {
        fill: #49B2A8;
      }
      .frame-effects {
        fill: #429890;
      }
    }

    /*Starman background */
    &.chip-326-bg {
      .frame {
        fill: #f3cb30;
      }
      .frame-effects {
        fill: #dcb72a;
      }
    }
  }
}



@keyframes holographic {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
