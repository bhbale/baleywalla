---
title: Archive
date: 2022-09-04 01:54:00 Z
permalink: "/archive/"
position: 2
menu: main
description: An archive of selected works from 2012-2019
layout: default
---

<main>
    {% include menu.html %}
    <section class="projects-headline">
		<h1>{{ page.description }}</h1>
	</section>
    <section class="list-of-projects">
        <ul>
            {% for post in site.posts offset:2 %}
                {% if post.images %}
                    <li>
                        <a href="{{ post.url }}">
                            <div class="featured-img">
                                <img src="{{ post.images[0] }}">
                            </div>
                            <p>{{ post.excerpt }}</p>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </section>
</main>