<template>
    <label :for="inputId" class="d-flex align-items-center">
        <input class="d-none" :id="inputId" type="checkbox" :checked="isChecked" @change="updateCheck">
        <div class="toggle-switch round">
            <span class="slider round"></span>
        </div>
        <span>{{ label }}</span>
    </label>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'

type ToggleSwitchComputed = {
    isChecked: boolean,
}

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        label: String,
        inputId: String
    },
    emits: ['update:modelValue'],

    computed: {
        isChecked(): boolean {
            return this.modelValue
        },
    },

    methods: {
        updateCheck(event: any) {
            this.$emit('update:modelValue', event.target.checked)
        },
    },

})
</script>
  
  
<style lang="scss">
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 21px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: 30px;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;

        &:before {
            content: "";
            position: absolute;
            height: 15px;
            width: 15px;
            left: 2px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 100%;
        }

        input:checked+& {
            background-color: #2196F3;
        }

        input:focus+& {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked+&:before {
            transform: translateX(21px);
        }
    }

    &.round {
        .slider {
            border-radius: 25px;

            &:before {
                border-radius: 50%;
            }
        }
    }
}
</style>