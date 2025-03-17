---
title: Frontend
date: 2022-09-04 01:54:00 Z
permalink: "/frontend/"
position: 2
menu: 
description: End-to-end projects for those in need of a one-man band.
layout: default
---

<main>
    {% include menu.html %}
    <section class="projects-headline">
		<h1>{{ page.description }}</h1>
	</section>
    <section class="list-of-projects">
        <ul>
            {% for post in site.categories['Frontend'] %}
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