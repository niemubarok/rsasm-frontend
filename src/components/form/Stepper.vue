/* eslint-disable vue/require-prop-types */
/* eslint-disable vue/require-prop-types */
<template>
  <!-- <div class="q-pa-md"> -->
  <div class="md-stepper-horizontal orange">
    <div v-if="!done" class="md-step active">
      <div class="md-step-circle"><span>1</span></div>
      <div class="md-step-title">Pilih Dokter</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div v-else class="md-step active">
      <div class="md-step-circle bg-secondary">
        <q-icon class="q-ml-md text-bold" name="checked" />
      </div>
      <div class="md-step-title">Pilih Dokter</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active">
      <div  :class="edit ? 'bg-secondary' : 'bg-grey-6'" class="md-step-circle">
        <span v-if="edit">2</span>
        <q-icon v-else-if="edit & confirm" class="q-ml-md text-bold" name="checked"/>
        <span v-else>2</span>
      </div>
      <!-- <div  class="md-step-circle bg-secondary"><q-icon class="q-ml-md text-bold" name="checked"/></div> -->
      <!-- <div v-else class="bg-grey-6 md-step-circle"> -->
        <!-- <span>2</span> -->
      <!-- </div> -->
      <div class="md-step-title">Isi Data Pasien</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active">
      <div
        :class="confirm ? 'bg-secondary' : 'bg-grey-6'"
        class="md-step-circle"
      >
        <span>3</span>
      </div>
      <div class="md-step-title">Konfirmasi</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["done", "edit", "confirm"],
  setup() {
    return {};
  },
};
</script>
<style>
.md-stepper-horizontal {
  display: table;
  width: 100%;
  margin: 0 auto;
  /* background-color:#FFFFFF;
	box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
}
.md-stepper-horizontal .md-step {
  display: table-cell;
  position: relative;
  padding: 24px;
}
/* .md-stepper-horizontal .md-step:hover, */
.md-stepper-horizontal .md-step:active {
  background-color: rgba(0, 0, 0, 0.04);
}
.md-stepper-horizontal .md-step:active {
  border-radius: 15% / 75%;
}
.md-stepper-horizontal .md-step:first-child:active {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.md-stepper-horizontal .md-step:last-child:active {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
/* .md-stepper-horizontal .md-step:hover .md-step-circle {
	background-color:#757575;
} */
.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
  display: none;
}
.md-stepper-horizontal .md-step .md-step-circle {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  background-color: #999999;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}

.md-stepper-horizontal.green .md-step.active .md-step-circle {
  background-color: #00ae4d;
}
.md-stepper-horizontal.orange .md-step.active .md-step-circle {
  background-color: #f96302;
}
.md-stepper-horizontal .md-step.active .md-step-circle {
  background-color: rgb(33, 150, 243);
}
.md-stepper-horizontal .md-step.done .md-step-circle:before {
  font-family: "FontAwesome";
  font-weight: 100;
  content: "\f00c";
}
.md-stepper-horizontal .md-step.done .md-step-circle *,
.md-stepper-horizontal .md-step.editable .md-step-circle * {
  display: none;
}
.md-stepper-horizontal .md-step.editable .md-step-circle {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
  font-family: "FontAwesome";
  font-weight: 100;
  content: "\f040";
}
.md-stepper-horizontal .md-step .md-step-title {
  margin-top: 16px;
  /* font-size:16px; */
  font-weight: 600;
}
.md-stepper-horizontal .md-step .md-step-title,
.md-stepper-horizontal .md-step .md-step-optional {
  text-align: center;
  color: rgba(0, 0, 0, 0.26);
}
.md-stepper-horizontal .md-step.active .md-step-title {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
}
.md-stepper-horizontal .md-step.active.done .md-step-title,
.md-stepper-horizontal .md-step.active.editable .md-step-title {
  font-weight: 600;
}
.md-stepper-horizontal .md-step .md-step-optional {
  font-size: 12px;
}
.md-stepper-horizontal .md-step.active .md-step-optional {
  color: rgba(0, 0, 0, 0.54);
}
.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #dddddd;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
  right: 0;
  left: 50%;
  margin-left: 20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
  left: 0;
  right: 50%;
  margin-right: 20px;
}
</style>
