<template>
    <div class="advanced-pet megaman-bg" :class="{'shaking': isShaking}" >
        <div class="cover-container">
            <svg viewBox="0 0 179.06 248"> 
                <g class="cover-opened-group">
                    <path class="base-color" :class="this.deviceType" d="M152.23,67h-10.9V52A51.9,51.9,0,0,0,89.53,0h0a51.9,51.9,0,0,0-51.8,52V67H3.06V236.5H13.27V248H165.76V236.5H176V67ZM137,199.35H41.66V113.6a3.93,3.93,0,0,1,3.93-3.93h87.53A3.92,3.92,0,0,1,137,113.6Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M176.06,214.18V205.7h0V67H141.31V51.78A51.78,51.78,0,0,0,89.53,0h0A51.78,51.78,0,0,0,37.75,51.78V67H3.06V214.17c-1.69,0-3.06,5-3.06,11.16S1.37,236.5,3.06,236.5v5.15a6.35,6.35,0,0,0,6,6.35H23.4V208.7L9.06,202.48V73H43.73V51.79A45.79,45.79,0,0,1,89.52,6h0a45.79,45.79,0,0,1,45.79,45.79V73h34.75V202.48l-14.37,6.22V248h15v-.06a6.36,6.36,0,0,0,5.39-6.29v-5.16c1.67-.13,3-5.07,3-11.16S177.73,214.3,176.06,214.18Z" />
                    <g class="megaman-logo" v-on:click="this.closeCover">
                        <NaviEmblem :deviceType="this.deviceType" :isCoverOpen="true" />
                    </g>
                </g>
            </svg>

            <div class="chip-container">
                <vddl-list class="chip-drag-area"
                    :list="draggableChip"
                    :horizontal="false"
                    :drop="onDrop">
                    <vddl-draggable v-for="chip in draggableChip" :key="chip.item.name"
                    :draggable="chip.item"
                    :moved="onMoved"
                    effect-allowed="move" :dragstart="sendParentMessage">
                        <chip-item :battle-chip="chip.item"></chip-item>
                    </vddl-draggable>
                </vddl-list>           
            </div>
        </div>

        <div class="body-container" :style="this.isCoverOpened === true ? 'margin-top: -88px;' : ''">
            <svg viewBox="0 0 244.82 316.16">
                <g class="frame-group">
                    <path class="frame-color" :class="this.deviceType" d="M176,181.73v-133h0V107.3H155.6V9.35H142.31a4.84,4.84,0,0,0-4.84,4.83v1.55h0V26.06a8.5,8.5,0,0,1-8.5,8.5H50.22a8.5,8.5,0,0,1-8.5-8.5V14.18a4.83,4.83,0,0,0-4.83-4.83H23.3v39.3h0v58.66H3v74.42H9v25.6a80.38,80.38,0,0,0,80.38,80.38h0a80.38,80.38,0,0,0,80.38-80.38v-1.14h0V181.73Z" />
                    <polygon class="handle-color-shadow" :class="this.deviceType" points="155.59 48.72 155.59 107.31 169.91 107.31 169.91 175.73 169.72 175.73 166.72 175.73 163.72 175.73 163.72 187.73 163.72 216.19 169.72 216.19 169.72 187.73 169.72 181.73 169.91 181.73 172.72 181.73 175.91 181.73 175.91 107.31 175.97 107.31 175.97 48.72 155.59 48.72" />
                    <polygon class="handle-color-shadow" :class="this.deviceType" points="23.34 107.31 23.34 48.65 2.97 48.65 2.97 107.31 2.97 181.73 8.97 181.73 8.97 181.77 8.97 216.19 14.97 216.19 14.97 181.77 14.97 175.73 8.97 175.73 8.97 107.31 23.34 107.31" />
                    <rect class="frame-slider-color" :class="this.deviceType" x="15.72" y="196.42" width="31.25" height="51.71" rx="15.62" ry="15.62" />
                    <rect class="frame-slider-color-shadow" :class="this.deviceType" x="18.65" y="199.49" width="25.38" height="45.74" rx="12.69" ry="12.69" />
                    <rect class="frame-slider-color" :class="this.deviceType" x="132.01" y="196.42" width="31.25" height="51.71" rx="15.62" ry="15.62" />
                    <rect class="frame-slider-color-shadow" :class="this.deviceType" x="134.95" y="199.49" width="25.38" height="45.74" rx="12.69" ry="12.69" />
                    <ellipse class="frame-light" :class="{'light-on': this.isLightOn && this.isCoverOpened}"  cx="89.3" cy="257.31" rx="9.05" ry="10.48" />
                </g>
                <g class="handle-group">
                    <path class="handle-color" :class="this.deviceType" d="M227.78,73.33s-9.22-15.77-14.14-18.08c-.42-.19-14.84-.11-14.84-.11H176V97.93a1.08,1.08,0,0,0,1,0c2.51-1.26,3.9-9.33,4.19-12.12.45-4.37-.26-12.36.75-16.63a9.32,9.32,0,0,1,6.49-5.91c2.15-.61,8.94-.65,8.94-.65s6.9,0,9.13.48a14.47,14.47,0,0,1,4.17,2,29.67,29.67,0,0,1,4.83,4.87,111.67,111.67,0,0,1,8.67,16.67C225.4,89.7,228,96,228.47,99.39a12.12,12.12,0,0,1,0,4.33,12.57,12.57,0,0,1-2.67,3.84c-1.94,1.77-6.65,4.3-8.66,6a80.12,80.12,0,0,0-8.84,9.83c-2.28,3-7,9-8.66,12.33-1.15,2.29-2.2,7.38-3.34,9.67a12.37,12.37,0,0,1-2.33,3.17,40.91,40.91,0,0,1-4.67,2.5,61.66,61.66,0,0,0-7,4.66,50.81,50.81,0,0,0-4.66,4.5c-.41.48-1.41,1.89-1.67,2.25v12h1l.23,0,.16,0,.17,0h.07l.14,0h0l.2,0,.12,0h.05l.17,0,.08,0,.23-.09c1.8-.89,3.65-4.38,4.88-6,1.83-2.34,5.55-7,8.25-8.56,2.05-1.15,7.13-2,9-3.44a9.94,9.94,0,0,0,1.75-3c2.31-4.85,5.7-15.16,8.5-19.75s10.2-12.39,14.5-15.5c2.66-1.92,9.14-4.24,11.25-6.75,1-1.24,1.79-4.63,1.75-6.25C238.25,96.56,227.78,73.33,227.78,73.33Z" />
                    <path class="handle-color-shadow" :class="this.deviceType" d="M228.47,99.39C228,96,225.4,89.7,224.14,86.56a111.67,111.67,0,0,0-8.67-16.67A29.67,29.67,0,0,0,210.64,65a14.47,14.47,0,0,0-4.17-2c-2.23-.5-9.13-.48-9.13-.48s-6.79,0-8.94.65a9.32,9.32,0,0,0-6.49,5.91c-1,4.27-.3,12.26-.75,16.63-.29,2.79-1.68,10.86-4.19,12.12a1.05,1.05,0,0,1-1.06,0v2.72a2,2,0,0,0,1.68-.09c4.94-2,6.34-12,6.63-14.82.45-4.36-.26-12.29.75-16.56.79-2.29,3-2.71,4.09-3,2.15-.62,7.44-.53,9.79-.52a39.67,39.67,0,0,1,7.45.55A11.2,11.2,0,0,1,209.89,68c1.36,1,3.93,5.35,4.91,6.75a78,78,0,0,1,7.25,13.92,66.9,66.9,0,0,1,3.67,11.83,5.73,5.73,0,0,1-.42,3.34c-1.87,2.91-7.21,4.83-10.75,8.76a85.48,85.48,0,0,0-9.41,9.9A116,116,0,0,0,197,135.64c-1.15,2.28-2.2,5.71-3.33,8-.44.88-.74,2.13-1.5,2.75-1,.84-3.1,1.36-4.25,2a57,57,0,0,0-6.67,4.67,42.63,42.63,0,0,0-4.25,4.25c-.47.55-1,1.21-1,1.21l-.05,4s1.25-1.78,1.73-2.34a50.81,50.81,0,0,1,4.66-4.5,61.66,61.66,0,0,1,7-4.66,40.91,40.91,0,0,0,4.67-2.5,12.37,12.37,0,0,0,2.33-3.17c1.14-2.29,2.19-7.38,3.34-9.67,1.69-3.36,6.38-9.33,8.66-12.33a80.12,80.12,0,0,1,8.84-9.83c2-1.7,6.72-4.23,8.66-6a12.57,12.57,0,0,0,2.67-3.84A12.12,12.12,0,0,0,228.47,99.39Z" />
                    <path class="handle-color-shadow" :class="this.deviceType" d="M244.22,106.14c-1.54-6.48-4.67-19.45-6.91-25.72A71.22,71.22,0,0,0,233.36,72c-6-9.41-10.25-15.68-10.25-15.68-5.81-7.63-7.56-7.63-9.47-7.63H175.91L176,180.66a16.54,16.54,0,0,0,4.5-.27,7.42,7.42,0,0,0,3-1.58c1.17-1.26,2.05-4.75,3-6.18,2.05-3.09,7.58-7.81,10.75-9.49,1.71-.91,5.54-2,7.25-2.75a9.12,9.12,0,0,0,2.74-2.24,24.66,24.66,0,0,0,1.26-3.51c1.21-2.93,3.46-8.86,4.75-11.75,1.64-3.68,5.37-10.94,8-14,3.47-4,12.57-9.95,17.25-12.5,1.44-.79,4.88-1.9,5.75-3.18C245.35,111.56,244.63,107.86,244.22,106.14Zm-7.5,5c-2.11,2.51-8.59,4.83-11.25,6.75-4.3,3.11-11.74,11-14.5,15.5s-6.19,14.9-8.5,19.75a9.94,9.94,0,0,1-1.75,3c-1.87,1.44-6.95,2.29-9,3.44-2.7,1.52-6.42,6.22-8.25,8.56-1.23,1.58-3.08,5.07-4.88,6-.06,0-.51.16-.53.16l-.32.06-.57.07-.93.07H176V55.14H198.8s14.42-.08,14.84.11c4.92,2.31,14.14,18.08,14.14,18.08s10.47,23.23,10.69,31.56C238.51,106.51,237.76,109.9,236.72,111.14Z" />
                    <rect class="handle-color-shadow" :class="this.deviceType" x="194.34" y="149.47" width="8.56" height="2.45" rx="1.23" ry="1.23" transform="translate(195.95 400) rotate(-126.57)" />
                    <rect class="handle-color-shadow" :class="this.deviceType" x="228.22" y="105.47" width="8.56" height="2.45" rx="1.23" ry="1.23" transform="translate(372.57 320.75) rotate(-147.85)" />
                    <rect class="handle-color-shadow" :class="this.deviceType" x="206.65" y="58.55" width="8.56" height="2.45" rx="1.23" ry="1.23" transform="translate(402.34 -47.1) rotate(135)" />
                </g>
                <g class="screen-opened-group">
                    <path d="M135.24,42h-92a7.73,7.73,0,0,0-7.73,7.73v90.23l9.05,16.87.17.67h89.06l.17-.67L143,139.94V49.71A7.73,7.73,0,0,0,135.24,42Z" />
                    <text class="advanced-text" transform="translate(57.05 151.07) scale(1.27 1)">ADVANCED</text>
                </g>
                <g class="controls-group">
                    <g class="directional-pad">
                        <circle class="button-color-shadow" cx="89.49" cy="204.67" r="34.06" />
                        <circle class="button-color" cx="89.49" cy="204.67" r="15.67" />

                        <g id="UpButton" @click="emitControlEvent(upEvent)">
                            <path class="button-color" d="M89.49,187.28a17.35,17.35,0,0,1,12.25,5.05l9.44-9.44a30.73,30.73,0,0,0-43.38,0l9.44,9.44A17.35,17.35,0,0,1,89.49,187.28Z" />
                            <path class="button-color-shadow" d="M92.54,185.73h-6.1A1.21,1.21,0,0,1,85.36,184l4.13-8.27h0L93.62,184A1.21,1.21,0,0,1,92.54,185.73Z" />
                        </g>
                        <g id="DownButton" @click="emitControlEvent(downEvent)">
                            <path class="button-color" d="M101.83,216.91a17.38,17.38,0,0,1-24.68,0l-9.44,9.44a30.73,30.73,0,0,0,43.56,0Z" />
                            <path class="button-color-shadow" d="M92.54,223.42h-6.1a1.21,1.21,0,0,0-1.08,1.75l4.13,8.26h0l4.13-8.26A1.21,1.21,0,0,0,92.54,223.42Z" />
                        </g>
                        <g id="LeftButton" @click="emitControlEvent(leftEvent)">
                            <path class="button-color" d="M72.11,204.67a17.33,17.33,0,0,1,5.13-12.34l-9.44-9.44a30.72,30.72,0,0,0-.09,43.46l9.44-9.44A17.36,17.36,0,0,1,72.11,204.67Z" />
                            <path class="button-color-shadow" d="M70.65,201.53v6.09a1.21,1.21,0,0,1-1.76,1.08l-8.26-4.13h0l8.26-4.13A1.22,1.22,0,0,1,70.65,201.53Z" />
                        </g>
                        <g id="RightButton" @click="emitControlEvent(rightEvent)">
                            <path class="button-color" d="M111.18,182.89l-9.44,9.44a17.39,17.39,0,0,1,.09,24.58l9.44,9.44a30.72,30.72,0,0,0-.09-43.46Z" />
                            <path class="button-color-shadow" d="M108.33,201.53v6.09a1.21,1.21,0,0,0,1.76,1.08l8.26-4.13h0l-8.26-4.13A1.22,1.22,0,0,0,108.33,201.53Z" />
                        </g>                    
                    </g>                   
                    <g id="ConfirmationButton" @click="emitControlEvent(confirmationEvent)">
                        <path class="button-color-shadow" d="M153.64,179.75,134.48,193a3.25,3.25,0,0,1-4.66-1.05l-7.68-13.3a3.25,3.25,0,0,1,1.43-4.56l21.07-10a3.23,3.23,0,0,1,4.2,1.31l5.76,10A3.24,3.24,0,0,1,153.64,179.75Z" />
                        <path class="button-color" d="M152.25,179.66l-17.41,12.06a3,3,0,0,1-4.24-.95l-7-12.09a2.94,2.94,0,0,1,1.29-4.14l19.15-9a2.94,2.94,0,0,1,3.81,1.19l5.24,9.07A3,3,0,0,1,152.25,179.66Z" />
                    </g>
                    <g id="CancelButton" @click="emitControlEvent(cancelEvent)">
                        <path class="button-color-shadow" d="M25.11,179.75,44.27,193A3.25,3.25,0,0,0,48.93,192l7.68-13.3a3.25,3.25,0,0,0-1.42-4.56l-21.08-10a3.22,3.22,0,0,0-4.19,1.31l-5.77,10A3.25,3.25,0,0,0,25.11,179.75Z" />
                        <path class="button-color" d="M26.51,179.66l17.41,12.06a3,3,0,0,0,4.23-.95l7-12.09a3,3,0,0,0-1.3-4.14l-19.14-9a3,3,0,0,0-3.82,1.19l-5.24,9.07A3,3,0,0,0,26.51,179.66Z" />
                    </g>
                </g>
                <g class="slider-group">
                    <path class="base-color" :class="this.deviceType" d="M142.31,182.7v22.12a52,52,0,0,1-52,52h0a52,52,0,0,1-52-52V182.7H3.81v22a86.5,86.5,0,0,0,86.5,86.5h0a86.5,86.5,0,0,0,86.5-86.5v-22Z" />
                    <path class="base-color-shadow2" :class="this.deviceType" d="M126,182.7v21.64a35.87,35.87,0,0,1-25.31,34.35v17.65A52.3,52.3,0,0,0,142.31,205V182.7Z" />
                    <path class="base-color-shadow2" :class="this.deviceType" d="M80.23,238.75a35.85,35.85,0,0,1-25.51-34.41V182.7H38.31V205a52.3,52.3,0,0,0,41.92,51.39Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M142.31,204.82a52,52,0,0,1-52,52h0a52,52,0,0,1-52-52V182.7h-6.5v21.12a58.34,58.34,0,0,0,58.34,58.34h0a58.34,58.34,0,0,0,58.33-58.34V182.7h-6.17Z" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="152.06" y="201.13" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(324.63 408.14) rotate(-180)" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="8.06" y="201.13" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(36.63 408.14) rotate(-180)" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="17.33" y="236.85" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(171.37 433.67) rotate(150)" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="44.47" y="263.15" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(312.52 351.75) rotate(120)" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="115.7" y="263.15" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(293.42 23.97) rotate(60)" />
                    <rect class="base-color-shadow" :class="this.deviceType" x="141.81" y="236.85" width="20.5" height="5.88" rx="2.94" ry="2.94" transform="translate(140.27 -43.9) rotate(30)" />
                    <path class="slide-cover-light" :class="{'light-on': this.isLightOn && !this.isCoverOpened}" d="M90.15,281.61h0l-8.72-11a1.55,1.55,0,0,1,1.21-2.51h15a1.55,1.55,0,0,1,1.21,2.51Z" />                
                </g>
                <g class="cover-closed-group">
                    <path class="base-color" :class="this.deviceType" d="M176.06,45.62v-31h-4.69V4.22a1.41,1.41,0,0,0-1.31-1.41h0l-.33,0H9.4l-.34,0H9A1.41,1.41,0,0,0,7.63,4.22v10.4H3.06V181.53h34.5v23.59a52,52,0,0,0,52,52h0a52,52,0,0,0,52-52V181.53h34.5v-6H176V45.62Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M119.93,37.45H59.36A9.19,9.19,0,0,1,51,32L37.9,2.78H141.4L128.31,32A9.19,9.19,0,0,1,119.93,37.45Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M141.4,2.78H37.9L40.31.18A.59.59,0,0,1,40.72,0h97.85a.59.59,0,0,1,.41.18Z" />
                    <path class="base-color" :class="this.deviceType" d="M118.31,32.94H61a8.88,8.88,0,0,1-8.11-5.26L40.58.23A.16.16,0,0,1,40.73,0h97.83a.16.16,0,0,1,.15.23L126.43,27.68A8.9,8.9,0,0,1,118.31,32.94Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M9.06,151.78V2.8a6.33,6.33,0,0,0-6,6.32V175.53h34.5Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M172.51,3.43l-.08,0-.36-.15-.2-.08-.26-.08c-.11,0-.21-.07-.32-.09l-.16,0-.44-.09h-.06a4.52,4.52,0,0,0-.53-.06h0v149l-28.5,23.75h34.5V9.12h0A6.32,6.32,0,0,0,172.51,3.43Z" />
                    <path class="cover-details" d="M150.11,2.78h-.05V149.45h.05L127.4,168.78v36a37.84,37.84,0,0,1-37.84,37.84h0a37.84,37.84,0,0,1-37.83-37.84v-36L29.78,149.45h-.05V2.78H20.31V153.87l23.26,18.58h-.51v32.17a46.25,46.25,0,0,0,46.25,46.25h0a46.25,46.25,0,0,0,46.25-46.25V172.45h0l23.26-18.58V2.78Z" />
                    <path class="cover-details" d="M149,1.26h9.81a0,0,0,0,1,0,0v0a1.52,1.52,0,0,1-1.52,1.52h-6.77A1.52,1.52,0,0,1,149,1.26v0A0,0,0,0,1,149,1.26Z" transform="translate(307.81 4.04) rotate(-180)" />
                    <path class="cover-details" d="M21.83,1.26H28.6a1.52,1.52,0,0,1,1.52,1.52v0a0,0,0,0,1,0,0H20.31a0,0,0,0,1,0,0v0A1.52,1.52,0,0,1,21.83,1.26Z" />
                    <g class="megaman-logo" v-on:click="this.openCover">
                        <NaviEmblem :deviceType="this.deviceType" :isCoverOpen="false" />
                    </g>
                    <path class="base-color-shadow" :class="this.deviceType" d="M176.06,15c1.69,0,3.07,5,3.07,11.17s-1.38,11.16-3.07,11.16Z" />
                    <path class="base-color-shadow" :class="this.deviceType" d="M3.06,15C1.37,15,0,20,0,26.13S1.37,37.29,3.06,37.29Z" />   

                    <g class="screen-close-group">
                        <path d="M89.31,42.62c-26.57,0-53.75,6.11-53.75,13.66h0v92.09l22.62,18.08a46.37,46.37,0,0,1,62.35-.07l22.53-18V56.28h0C143.06,48.73,117.65,42.62,89.31,42.62Z" />
                    </g>             
                </g>  

                <scene-controller />

                <g class="title-group" :class="{'yellow-color': this.isCoverOpened}">
                    <path d="M77.18,51H60.43a1.2,1.2,0,0,0-1.2,1.2v8.07a.87.87,0,0,0,.86.87H64a.87.87,0,0,0,.87-.87v-4h12.3a1.43,1.43,0,0,0,1.43-1.43V52.42A1.43,1.43,0,0,0,77.18,51Zm-4.69,3.86H64.88V52.36h7.61a1.25,1.25,0,0,1,0,2.49Z" />
                    <path d="M81.33,51a1.19,1.19,0,0,0-1.19,1.2v8.07a.86.86,0,0,0,.86.87H98.36V58.69H85.78V57.28H98.36V54.84H85.78V53.43H98.36V51h-17Z" />
                    <path d="M99.88,51v2.44h7.18v6.84a.85.85,0,0,0,.86.86h3.92a.85.85,0,0,0,.86-.86V53.39h7.18V51Z" />                      
                </g>
            </svg>
        </div>        
    </div>
</template>

<script>
import { gsap } from "gsap"
import { mapState } from 'vuex'
import { Howl } from 'howler';
import SceneController from './game/SceneController.vue' 
import ChipItem from './battlechip/ChipItem.vue'
import { Events, SceneNames, NotificationTypes } from "../global/constants";
import EventBus from "../global/eventBus";
import Notification from '../components/game/common/notification.js';
import World from '../components/game/common/world.js'
import NaviEmblem from '../components/game/ui/NaviEmblem.vue';
var Shake = require('shake.js');

export default {
    name: "PET",
     props: {
        readOnly: Boolean
    },
    components: {
        ChipItem, SceneController, NaviEmblem
    },
    computed: {
        ...mapState({
            isInBattle: state => state.session.isInBattle,
            currentScene: state => state.session.currentScene,
            recovery: state => state.session.navi.recovery,
            notification: state => state.session.notification,
            deviceType: state => state.session.deviceType
        })
    },   
    watch: {
        currentScene() {
            this.toggleShakeEvent();
            this.togglePetLed();
        }
    },
    data() {
        return {
            draggableChip: [],
            isCoverOpened: false,
            upEvent: Events.Up,
            downEvent: Events.Down,
            leftEvent: Events.Left,
            rightEvent: Events.Right,
            confirmationEvent: Events.Confirmation,
            cancelEvent: Events.Cancel,
            isShaking: false,
            shakeCount: 0,
            myShakeEvent: null,
            isLightOn: false,
            shakingSound: null,
            desktopInterval: null
        }
    },
    mounted() {
        if(!this.readOnly) {
            this.myShakeEvent = new Shake({
                threshold: 10, // optional shake strength threshold
                timeout: 1000 // optional, determines the frequency of event generation
            });

            this.toggleShakeEvent();
        }
    },
    methods: {
        openCover() {
            if(!this.readOnly) {
                this.isCoverOpened = true;
                gsap.to('.slider-group', {y:25, duration: 0.5,  ease: "none"});
                gsap.to('.cover-container', {display: 'block', duration: 0,  ease: "none"});
                gsap.to('.cover-closed-group',{display: 'none' , duration: 0,  ease: "none" });
            }
        },
        closeCover() {
            this.isCoverOpened = false;
            gsap.to('.slider-group', {y:0, duration: 0.5,  ease: "none"});
            gsap.to('.cover-container', {display: 'none' , duration: 0,  ease: "none" });
            gsap.to('.cover-closed-group',{display: 'block' , duration: 0,  ease: "none" });

            this.clearChipSlot();
        },
        onMoved() {
            this.draggableChip = [];
        },
        onDrop(draggable) {
            //set timeout to prevent the vuejs duplicate key error
            setTimeout(() => {
               
               this.clearChipSlot();
               
               this.draggableChip.push({
                    index: draggable.index,
                    item: draggable.item
                });

                if(this.isInBattle) {
                    this.emitControlEvent(Events.SlotIn, draggable.item);
                }
            }, 1)            
        },
        toggleShakeEvent() {
            if(this.currentScene === SceneNames.StandBy) {
                window.addEventListener('shake', this.onShaking, false);
                this.myShakeEvent.start();
            } else {
                window.removeEventListener('shake', this.onShaking, false);
                this.myShakeEvent.stop();
                this.isShaking = false;
                if(this.shakingSound) {
                    this.shakingSound.stop();
                }
                
                this.stopShakingForDesktop();
                this.shakeCount = 0;
            }
        },
        togglePetLed() {
            if(this.currentScene === SceneNames.Notification && this.$store.state.session.notification !== null &&
                this.$store.state.session.notification.type === NotificationTypes.Virus) {
                this.isLightOn = true;

            } else {
                this.isLightOn = false;
            }
        },
        onShaking() {
            if(!this.isInBattle && this.notification === null) {
                if(this.shakeCount > 5 && this.recovery == 100) {
                    this.isShaking = false;
                    this.stopShakingForDesktop();
                    this.shakingSound.stop();
                    this.shakeCount = 0;
                    var virus = World.getRandomVirus(this.deviceType,
                        this.$store.state.session.currentWorld, this.$store.state.session.currentStage);

                    this.$store.commit('session/setNotification', 
                        new Notification("A VIRUS!!", NotificationTypes.Virus, virus));

                    this.$store.commit('session/setCurrentScene', SceneNames.Notification);    
                } else {
                    this.shakeCount += 1;
                    if(this.recovery < 100) {
                        this.$store.commit('session/incrementNaviRecovery', 10);
                    }
                    this.startShakingAnimation();
                }
            }
        },
        startShakingAnimation() {
            //Play shaking sound
            if(this.shakingSound === null) {
                this.shakingSound= new Howl({
                    src: require("../assets/sounds/shaking.mp3"),
                    volume: 1,
                    loop: true
                });
            }

            this.isShaking = true;
            this.shakingSound.play();
            setTimeout(() => {
                this.isShaking = false;
                this.shakingSound.stop();
            }, 7000);
        },
        startShakingForDesktop() {
            if(this.currentScene === SceneNames.StandBy) {
                this.desktopInterval = setInterval(() => {
                    this.onShaking();
                }, 1000);
            }
        },
        stopShakingForDesktop() {
            if(this.desktopInterval != null) {
                clearInterval(this.desktopInterval);
            }
        },
        emitControlEvent(eventName, data) {
            EventBus.$emit(eventName, data);
        },
        clearChipSlot() {
            this.draggableChip = [];
        },
        sendParentMessage() {
            this.$emit('dragstart');
        }
    }
}
</script>

<style scoped lang="scss">
.advanced-pet {
    .megaman-logo, 
    #ConfirmationButton, 
    #CancelButton, 
    #UpButton, 
    #DownButton, 
    #LeftButton, 
    #RightButton > * {
        cursor: pointer;
    }
    .cover-container {
        width: 220px;
        display: none;
    }
    .chip-container {
        position: relative;
        z-index: 1;
        margin-top: -140px;
        .chip-drag-area {
            margin-left: 55px;
            width: 110px;
            height: 164px;
            .battle-chip {
                &:hover {
                    cursor: move;
                }
            }  
        }
    }
    .body-container {
        width: 300px;
        position: relative;
        z-index: 2;
        .title-group > * {
            fill: #fff;
        }
        .yellow-color > * {
            fill:#edd21c;
        }
    }
}
.base-color {
    &.megaman {
        fill:#084caf;
    }
    &.protoman {
        fill:#ad0909;
    }
}
.base-color-shadow {
    &.megaman {
        fill:#034593;
    }
    &.protoman {
        fill:#910505;
    }
}
.base-color-shadow2 {
    &.megaman {
        fill:#044484;
    }
    &.protoman {
        fill:#820606;
    }  
}
.cover-details, .advanced-text {
    fill:#edd21c;
}
.advanced-text {
    font-size:8.89px;
    font-family:BN Elements;
}

.button-color {
    fill:#70706f;
}
.button-color-shadow {
    fill:#4f4f4d;
}

.handle-color { 
    &.megaman {
        fill:#70706f;
    }
    &.protoman {
        fill:#333333;
    }    
}
.handle-color-shadow {
    &.megaman {
        fill:#4f4f4d;
    }
    &.protoman {
        fill:#2d2d2d;
    }  
}

.slide-cover-light, .frame-light {
    fill:#70706f;
}

.frame-color { 
    &.megaman {
        fill:#ccc;
    }
    &.protoman {
        fill:#333333;
    }  
}

.frame-slider-color {
    fill:#4f4f4d;   
}

.frame-slider-color-shadow {
    &.megaman {
        fill:#70706f;
    }
    &.protoman {
        fill:#2d2d2d;
    }     
}

.light-on {
    &.slide-cover-light,
    &.frame-light {
        fill: #F00;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;
        -webkit-animation: blinkRed 0.5s infinite;
        -moz-animation: blinkRed 0.5s infinite;
        -ms-animation: blinkRed 0.5s infinite;
        -o-animation: blinkRed 0.5s infinite;
        animation: blinkRed 0.5s infinite;
    }
}

.shaking {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    -moz-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    -ms-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    -o-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    transform: translate3d(0, 0, 0);
}

@keyframes blinkRed {
    from { fill: #F00; }
    50% { fill: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
    to { fill: #F00; }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>