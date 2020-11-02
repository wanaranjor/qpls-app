<script>
	import Nav from "../components/Nav.svelte";
	import Banner from "../components/Banner.svelte";
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<svelte:head>
	<title>Quality Professional Services SAS</title>
</svelte:head>

<Nav {segment} />
<Banner />

<main>
	<slot />
</main>

<Footer />
