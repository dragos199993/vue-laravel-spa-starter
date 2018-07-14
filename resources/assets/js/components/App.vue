<template>
	<div>
		<main-header></main-header>

		<router-view></router-view>
        
		<main-footer></main-footer>
	</div>
</template>

<script>
	import Header from './shared/Header.vue';
	import Footer from './shared/Footer.vue';

	export default {
		components: {
			'main-header': Header,
			'main-footer': Footer
		}
	}
</script>
