<script>
	import { page } from '$app/stores';
</script>

<header class="w-full">
	<nav>
		<ul class="flex justify-center space-x-10">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="text-lg" href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a class="text-lg" href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>
