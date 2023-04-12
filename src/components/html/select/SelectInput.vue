<template>
    <select v-model="selectedOption">
        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
</template>
  
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            required: true
        }
    },
    data() {
        return {
            selectedOption: this.value
        }
    },
    watch: {
        value(newValue) {
            this.selectedOption = newValue;
        }
    },
    mounted() {
        this.$emit('input', this.selectedOption);
    },
    methods: {
        updateValue(event) {
            this.selectedOption = event.target.value;
            this.$emit('input', this.selectedOption);
        }
    }
}
</script>
  