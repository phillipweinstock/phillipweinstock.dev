---
layout: base.njk
title: Case Studies — Phillip Weinstock
---

# Case Studies

Longer write-ups on things I've built. The problems, the decisions, the outcomes.

---

<div class="case-study">

### Smart Irrigation System — Camfor

**Problem:** TBD — describe the challenge.

**Approach:** TBD — what you built and why.

**Outcome:** TBD — results, metrics, what shipped.

</div>

*Write as much or as little as you want here — architecture diagrams, code snippets, lessons learned. This is your space.*

---

<div class="case-study">

### LoRa-MQTT Gateway in Elixir

**Problem:** IoT gateways face high traffic loads and need to handle many concurrent processes reliably. Conventional languages handle this, but functional programming promises better concurrency and reliability.

**Approach:** Built the same LoRa-MQTT gateway in both Elixir and C++. Tested on a single-board computer first, then ported to ESP32 microcontrollers. Compared performance, code size, and reliability. Published findings across two papers (ITNAC 2023, MDPI Electronics 2024).

**Outcome:** The Elixir version was more compact and handled concurrency naturally — but performance on ESP32 was significantly worse than C++. The supporting libraries and Erlang VM on embedded hardware aren't there yet. Conclusion: functional programming has real potential for IoT, but the ecosystem needs to catch up.

</div>

*Your full thoughts, diagrams, code — whatever tells the story. Add new case studies by copying the pattern above.*

---

← [back home](/)
