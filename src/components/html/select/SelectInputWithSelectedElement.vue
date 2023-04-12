<template>
    <div :class="componentContainerClass">
        <ul class="my-2">
            <li class="badge badge-lg bg-primary mx-1" v-for="(option, i) in selectedOptions" :key="i">
                {{ option.label }} <a href="#" @click.prevent class="text-white fw-bold"><i class="fa fa-times"
                        @click="del(i - 1)"></i></a>
            </li>
        </ul>
        <select-input class="form-control" :options="options" :value="options[0].value" @change="add($event)">
        </select-input>
    </div>
</template>
  
<script>

import SelectInput from "./SelectInput.vue";

export default {
    inheritAttrs: false,
    name: 'SelectInputWithSelectedElement',
    props: {
        options: Array,
        componentContainerClass: String,
    },
    data() {
        return {
            selectedValues: [],
        }
    },
    components: {
        SelectInput
    },
    computed: {
        selectedValue() {
            return this.selectedOptions[this.selectedOptions.length - 1];
        },
        selectedOptions() {
            var selectedOptions = [];
            this.options.forEach(option => {
                this.selectedValues.forEach(value => {
                    if (option.value == value)
                        selectedOptions.push(option);
                });
            });
            return selectedOptions;
        }
    },
    methods: {
        add($event) {
            var value = $event.currentTarget.value;
            if (!this.selectedValues.includes(value) && value) {
                this.selectedValues.push(value);
            }
        },
        del(index) {
            this.selectedValues.splice(index, 1);
        }

    },
    watch: {
        selectedOptions() {
            this.$emit('changeSelectedElement', this.selectedValues);
        }
    }
}
</script>
  