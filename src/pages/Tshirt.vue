<template>
  <q-card class="fixed-center rounded-borders bg-grey-4 q-pa-md" style="width: 400px">
    <div class="row justify-between no-wrap full-width">
      <div class="row items-center q-mr-xl">Name</div>
      <div class="full-width">
        <q-select v-model="namesModel" :options="namesOption" behavior="menu"></q-select>
      </div>
    </div>
    <div class="row justify-between no-wrap full-width">
      <div class="row items-center q-mr-xl">Size</div>
      <div class="full-width">
        <q-select v-model="sizesModel" :options="sizesOption" behavior="menu"></q-select>
      </div>
    </div>
    <div class="row justify-between no-wrap full-width">
      <div class="row items-center q-mr-xl">Color</div>
      <div class="full-width">
        <q-select
          v-model="colorsModel"
          :options="colorsOption"
          behavior="menu"
        ></q-select>
      </div>
    </div>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";

const shirt = [
  {
    title: "Shirt A",
    items: [
      {
        size: "L",
        variant: [
          {
            color: "Red",
            stock: "7",
          },
          {
            color: "Black",
          },
        ],
      },
    ],
  },
  {
    title: "Shirt B",
    items: [
      {
        size: "L",
        variant: [
          {
            color: "Green",
            stock: "20",
          },
          {
            color: "White",
          },
        ],
      },
      {
        size: "M",
        variant: [
          {
            color: "Yellow",
            stock: "5",
          },
          {
            color: "White",
            stok: 8,
          },
        ],
      },
    ],
  },
];

const namesOption = ref([]);
const namesModel = ref(null);

const sizesOption = ref([]);
const sizesModel = ref(null);

const colorsOption = ref([]);
const colorsModel = ref(null);

onMounted(() => {
  let _name = [];
  let _size = [];
  let _color = [];

  shirt.forEach((name) => {
    _name.push(name.title);
  });

  shirt.forEach((size) => {
    size.items.forEach((item) => {
      _size.push(item.size);
    });
  });

  shirt.forEach((size) => {
    size.items.forEach((item) => {
      item.variant.forEach((color) => {
        _size.push(color.color);
      });
    });
  });

  namesOption.value = _name;
  sizesOption.value = _size;
  colorsOption.value = _name;
});
</script>
