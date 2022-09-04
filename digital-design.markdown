---
title: Digital Design
date: 2022-09-04 01:54:00 Z
permalink: "/digital-design/"
position: 1
description: UX/UI for websites, mobile e-commerce, and TV screens.
layout: default
---

<main>
    {% include menu.html %}
    <section class="projects-headline">
		<h1>{{ page.description }}</h1>
	</section>
    <section class="list-of-projects">
        <ul>
            {% for post in site.categories['Digital Design'] %}
                <li>
                    <a href="{{ post.url }}">
                        <div class="featured-img">
                            <img src="{{ post.images[0] }}">
                        </div>
                        <p>{{ post.excerpt }}</p>
                    </a>
                </li>
            {% endfor %}
        </ul>
    </section>
</main>