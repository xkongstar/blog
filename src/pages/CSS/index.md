---
title: CSS问题
description: CSS中遇到的问题，以及知识点
layout: ../../layouts/MainLayout.astro
---


## CSS 概述

### 1、页面加载中CSS选择器的优先级
>   **!important** > 内联样式(1000) > ID选择器(100) > class选择器、属性选择器、伪类选择器(10) > 元素选择器、伪元素选择器(1)  
    <table><tr><td bgcolor=darkorange>权重计算时不能进位，即12个class选择器(10)也不能> ID选择器(100) </td></tr></table>  

### 2、上面说的属性选择器、伪类选择器、元素选择器、伪元素选择器是什么

### 3、为什么有些属性不设置也会跟随父级，哪些元素会继承属性

### 4、一个页面的元素最终样式是怎样计算处理的