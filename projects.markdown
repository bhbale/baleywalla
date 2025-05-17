---
title: Projects
date: 2022-09-04 01:53:00 Z
permalink: "/projects/"
position: 0
menu: main
description: I'm a British-Filipino digital product designer originally from Hong
  Kong currently based in Sheffield, UK.
layout: default
---

<main>
    {% include menu.html %}
    <section class="headline">
        <h1>{{ page.description }}</h1>
    </section>
    <section class="list-of-projects">
        <ul>
            {% for post in site.posts limit:2 %}
                {% if post.images %}
                    <li>
                        <a href="{{ post.url }}">
                            <div class="featured-img">
                                <img src="{{ post.images[0] }}">
                            </div>
                            <p>{{ post.excerpt }}</p>
                            <p>{{ post.title }}, {{ post.focus }}, {{ post.year }}</p>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </section>
    {% include about.html %}
</main>