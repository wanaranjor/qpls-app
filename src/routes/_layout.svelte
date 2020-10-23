<script>
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<svelte:head>
	<title>QPLS</title>
</svelte:head>

<Nav {segment} />

<main>
	<slot />
</main>

<Footer />
