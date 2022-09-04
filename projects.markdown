---
title: Projects
date: 2022-09-04 01:53:00 Z
permalink: "/projects/"
position: 0
layout: default
description: Recent digital design projects for a range of sectors
---

<main>
    {% include menu.html %}
    <section class="projects-headline">
		<h1>{{ page.description }}</h1>
	</section>
    <section class="list-of-projects">
        <ul>
            {% for post in site.posts %}
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