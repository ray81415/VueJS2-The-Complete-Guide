<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 3000}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode){
                    let {mainColor, secondColor, delay} = binding.value;
                    if (binding.modifiers.delayed) delay = 3000;
                    setTimeout(function() {
                        if (binding.arg === 'background') {
                            el.style.background = mainColor;
                        } else {
                            el.style.color = mainColor;
                        }
                        if (binding.modifiers.blink) {
                            let currentColor = mainColor;
                            setInterval(() => {
                                currentColor === mainColor ? 
                                    currentColor = secondColor :
                                    currentColor = mainColor;
                                if (binding.arg === 'background') {
                                    el.style.background = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, 1000);
                        }
                    }, delay);
                }
            }
        }
    }
</script>
