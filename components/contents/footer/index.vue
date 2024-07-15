<script setup>
    const config = useRuntimeConfig();
</script>
<template >
    <footer>
        <div class="futter">
				<div class="menu1">
				</div>
				<table>
					<tbody><tr>
						<td valign="top">
							<div class="label" >
							<a href="/">Аренда офиса в Москве</a> от собственника без комиссии. Вам<br>
							требуется <a href="/">аренда офисов в Москве без посредников.</a> Мы<br>
							помогаем <a href="/">Снять офис в Москве</a> в Бизнес Центрах и особняках.<br>
							<a href="/arenda-ulitca">Аренда по улицам</a> <a href="/nalogovie">Аренда по налоговым</a>
							<a href="/arenda-pomeshenij">Аренда помещений</a>							
							</div>
							<br>
                            2006-2024 год {{ config.public.HOSTNAME }} Коммерческая недвижимость
						</td>
						<td valign="top" style="text-align: left">
						
			




						</td>
						<td valign="top" style="text-align: right;padding-right: 14px;">
						<a href="/">Аренда офиса от собственника без комиссии</a>	
						</td>					
					</tr>
				</tbody></table>
			</div>

    </footer>
</template>
<style scoped>
.futter {
    font-size: 12px;
    color: #000000;
}
a{
    text-decoration: underline;
}
</style>