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
        <section class="projects">
            {% for post in site.posts limit:1 %}
                {% if post.images %}
                    <div class="single-project">
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                {% for item in post.images %}
                                    <div class="swiper-slide">
                                        <img src="{{ item }}">
                                    </div>
                                {% endfor %}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                        <div class="project-description">
                            <div class="project-links"></div>
                            <p>{{ post.excerpt }}</p>
                        </div>
                        <div class="project-info">
                            <ul>
                                <li>{{ post.title }}</li>
                                <li>
                                    <ul>
                                        {% for item in post.categories %}
                                            <li>{{ item }}</li>
                                        {% endfor %}
                                    </ul>
                                </li>
                                <li>{{ post.industry }}</li>
                                <li>{{- post.year -}}
                                    {% if post.extension %}
                                        {{- post.extension | prepend: "-" -}}
                                    {% endif %}
                                </li>
                            </ul>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </section>
    {% include about.html %}
</main>