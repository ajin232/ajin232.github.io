Vue.createApp({})

.component('portfolio-entry', {
    template: `
        <div class = "row">
            <div class = "col-lg-10">
                <h4>{{ name }}</h4>
                <p>{{ text }}</p>
            </div>
            <div class = "col btncol">
                <a v-bind:href = url style = "margin: auto 0px auto auto;"><button class = "button" tabindex = "-1">View <span class = "caret">&rsaquo;</span></button></a>
            </div>
        </div>
    `,
    props: ['name', 'text', 'url']
})
.mount('#app')