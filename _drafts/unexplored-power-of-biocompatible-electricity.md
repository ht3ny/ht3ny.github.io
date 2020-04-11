---
layout: post
title: "Unexplored Power of Biocompatible Electricity"
date: 2020-04-11 11:00:00 +1100
categories: blog
---
<link rel="stylesheet" type="text/css" href="/assets/css/custom.css" />
<link rel="stylesheet" type="text/css" href="/assets/css/tooltip.css" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="{{ base.url | prepend: site.url}}/assets/js/tooltips.js"></script>
In previous post, we established that a mutating virus presents a unique challenge to drug developer. So intuitively, I try to look into a viable solution that would be effective against viral outbreak regardless of the mutational factor. Understanding that vaccine and antiviral tends to be specific, I explore the possibility of a more broad spectrum solution, one that harms invading virus and possibly the host at the same time but is much more harmful to the virus. When outside of the host, virus is vulnerable to many things. If one wish to destroy virus in a petri dish , one can:
- apply bleach to viral solution, 
- heat the viral solution to 60&#8451; or even higher, 
- use electricity to cause extreme electroporation across the membrane hence rupturing it
- radiate with ultraviolet light to break the virus gene

Intuitively, the candidates are chemical, heat, radiation, and electricity. It is easy to see there's many things that can kill a virus outside the host, but it's completely different matter about killing virus inside the host. One may think any of the potential solutions mentioned is more likely to kill **both** the virus and the host. But as I look further into each of the candidates, I suprisingly found a viable candidate: electricity

## Biocompatible Electricity

Biocompatible electricity is best described as electricity exposure in which human body can tolerate for long period. The term of biocompatible electricity was first mentioned in 1991 study done at Albert Einstein College of Medicine by a team of 3 researchers: Professor William D. Lyman, Dr Irwin R. Merkatz, and Dr. Steven G. Kaali. 

Their paper titled _"Biocompatible Electric Current Attenuates HIV Infectivity"_ describe <span class="tooltip" data-key="inVitro">in vitro</span> experiments where direct electric current at microcurrent level was applied to a solution of HIV-1 virus and <span data-key="H9Cell" class="tooltip">[H9 cells][info1]</span> separately. The study found a **statistically significant reduction in <span class="tooltip" data-key="ReverseTranscriptase">[reverse transcriptase][info2]</span>** activity when HIV virus was mixed with the H9 cells. This translates to **attenuated infectivity** of HIV virus. The researchers hypothesised that electric current might somehow damaged reverse transcriptase enzyme, hence rendering HIV-1 virus unable to replicate inside the H9 cells. On the other hand, H9 cells treated with similar treatment were still viable and no significant temperature (no more than 1&#8451;) were observed.

Below are some excerpts and images taken from the paper that describe the findings:
> ### Reverse Transcriptase Assays  
>  
> The direct electric currents to which HIV was exposed also reduced reverse transcriptase activity. **.......**  
, there was a significant decrease in the amount of reverse transcriptase activity after exposure of the virus to either 50 &#xb5;A for 3 or 6 minutes **.......**  
near ablation of reverse transcriptase acivity was seen with exposure of the viral isolate yo 100 &#xb5;A for 6 minutes. **.......**  
An analysis of variance indicate the decrease in reverse transcriptase activity was statistically significant (p < 0.0001)

<img src="/assets/images/hiv1_infectivity_h9_viability.jpg" height="395" width="262"/>  
<sup>source: Biocompatible Electric Current Attenuates HIV Infectivity</sup>

It is fair to say that the findings of electric current can damage virus ability to infect might be only applicable to retrovirus as one of a kind. But the principle of eliminating / disabling virus using electricity has also been used and studied in botany. There are <span class="tooltip" data-key="inVivo">in vivo</span> studies that demonstrate electricity is shown to be able to eliminate virus in [potatoes][journal2], [banana][journal5], [yellow bean cormels][journal3], and [garlic][journal4] while leaving the seddlings healthier and free of viral infection. Although these botany studies uses milliAmpere current  which is 1000 times of &#xb5;A, but it gives credence that certain level of electricity can do damage to virus in general, and more over it was achieved in <span class="tooltip" data-key="inVivo">in vivo</span>. There is also a similar in vivo 2015 [study][journal] of applying electrical field for treating antibiotic resistant bacterial infection.

The study concluded that the attenuation effect is proportional to the strength and time exposure. But if one were to apply the same study on whole human body, we need to look at specifically <span class="tooltip" data-key="currentDensity">current density</span> instead of total current, because that's what most likely matter down at cellular level. So we should reconclude that **attenuation effect of electricity is directly porportional to current density and time exposure** 

From the study, the excerpt describing the setup:
> ## Electrical Treatment of HIV   
> The RF strain of HIV (AIDS Reagent Program) was cryopreserved prior to treatment at -70&#8451;. For treatment, a sample of virus was thawed and maintained on ice at 4&#8451;. Ten microliters (&#xb5;L) of HIV at a concentration of 10<sup>5</sup>infectious particles per mL were placed into a chamber which included a pair of platinum electrodes 1 mm apart permanently mounted into a well 1.56 mm in length and 8.32 mm in depth equal to 12.9 &#xb5;L volume capacity. The chamber was connected to a power supply capable of creating constant direct current.The viral aliquots were exposed to direct currents ranging from 0 microamperes (&#xb5;A) for up to 12 minutes to 100 &#xb5;A for up to 6 minutes.

The crosssectional area would be 8.32mm x 1.56mm = 12.9 mm<sup>2</sup>. With current of 50 - 100 &#xb5;A, this would gives current density at a range 3.85 - 7.7 &#xb5;A/mm<sup>2</sup>.

## How electricity affect humans body?

Now that we understood the effect of biocompatible electricity on virus from past studies, we need to first understand how electricity affect human's body

First, we look into the fatal side effect of electricity. Then we look at the possible side effect of prolonged exposure of electricity to human body

### Fatal side effect of electrical Power

Table below shows the strength of current vs body's reaction  
<img src="https://qph.fs.quoracdn.net/main-qimg-99fd4427874351be185929c5de2a448d" width="395" height="262">

The following excerpts taken from [Wikipedia][info3]:
> The United States National Library of Medicine states: "Contact with 20 mA of current can be fatal".
> 
> The health hazard of an electric current flowing through the body **depends on the amount of current and the length of time for which it flows**, not merely on the voltage. However, a high voltage is required to produce a high current through the body. This is due to the relatively high resistance of skin when dry, requiring a high voltage to pass through. The severity of a shock also depends on whether the path of the current includes a vital organ. 
> **......**  
>
> Whether an electric current is fatal is also dependent on the path it takes through the body, which depends in turn on the points at which the current enters and leaves the body. The current path **must usually include either the heart or the brain** to be fatal. 

If one wish to apply biocompatible electric current to the targeted part of human's body, there are several things to be careful about:
- the total electric current must be below the fatal milliAmpere strength
- the path of electric current must avoid heart and brain. Restriction may also apply to pacemakers user and other similar bionic implanted devices.
- the electric potential applied must not be too great that it overcome natural skin resistivity and causing high current flowing

Next we look at the potential prolonged side effect of applying biocompatible current

### Prolonged effect of electricity exposure

Now that we establish the non-fatal limit of electricity on human body, we need to look into what are the prolonged effect of exposing electricity to human body. The well known effects are:
- [electrolysis][info4]
- [transfection][info5] via [electroporation][info6]
- potential [biocides][info7]

First is [electrolysis][info4]. Up to 60% of the body is made of water (H<sub>2</sub>O). One of the well known effect of applying electricty on water is electrolysis. When constant static electric field is applied to water, each Hydrogen and Oxygen's pole end of water will be attracted to polar opposite of the electric field. If enough strength is applied, it will break the molecular bond, and form hydrogen and oxygen gas on each end of the electric field. The theoretical decomposition potential of water is 1.23V, although in practice you would higher voltage[[info][info9]]

The effect of electrolysis on blood has been used, for example: treating [aneurysm][info10] by closing the sac with blood clot using [Guglielmi Detachable Coil][info11]. Electrolysis is also one of the utilised mode in [electrosurgery][info12].

Second is [transfection][info5] via [electroporation][info6] method. Direct electric field could cause the surface membrane of the cell to be stretched, hence making intransient pores by which (internal or external) substance to pass through the cell. This could cause cell to absorb or lose substance too much and too fast, hence causing cell's death.

Electroporation is widely used in microbiology research to introduce substance into cells, for example: for producing <span class="tooltip" data-key="knockoutMouse">[knockout mices][info13]</span> in medical research or to introduce new coding DNA into cell for genetic research. Typical voltage requirement for electroporation is a very short-pulsed but high voltage (1 to 2 kV).

Third is potential biocides. In the practical application of electricity onto human body, metallic electrodes are often used. When electric current flows metal comes in contact with internal body's fluids (like for example: blood), unwanted chemical compound and formation of metalic ion could be formed at the electrode surface. Overtime, such chemical release can be poisonous for body. Most common metal used as electrode are platinum, copper, and stainless steel. 

## How could biocompatible electricity be applied to body

Now that we understand the risks of applying electricity to human body, we need to turn our attention on what are the possible ways to deliver it safely to the targeted part of human body 

There are 2 ways where we can deliver this: invasive and non invasive. Invasive method could be done via a bionic implant or intravenous method. Non invasive method would be done via external application (for example: <span class="tooltip" data-keys="TENS">[TENS][info14]</span> or possibly other novel method). 

Another thing to consider is the type of cell virus usually reside in, 


First is the fatal risk. Electricity can be fatal to human body if very high voltage is used, or current in the strength of mA or higher is used. Also brain and heart are area that are identified to be highly sensistive to electrical current. Pacemaker users are also identified as high risk. Biocompatible electricity requires electrical current in the range of 50 to 100 &#xb5;A, which is at most 10 times less than 1mA (the current where most people feel a faint tingle)

So combining all these requirements and theory, we can build some sensible criteria for applying biocompatible electricity to human body:
- current strength of 50-100 &#xb5;A
- limiting potential voltage to 1.23V maximum to avoid the effect of electrolysis
- To minimise transfection and electrolysis, use square wave +ve/-ve electrical potential with frequency between 10Hz and 60Hz
- For invasive/intravenous application:
  - inert electrodes are required such as ceramic insulated electrode in the 2015 study 
  - assuming total general body resistance of 300 Ohms and current of 50-100 &#xb5;A, the required voltage would be 6-30mV. Depending on the area of the body, the effective electrical resistance could be lower, hence the need to limit and regulate current
- For noninvasive / external application (TENS or stainless steel electrode):
  - to overcome natural skin electrical resistance, the skin need to be sufficiently wet with electrolytic solution ( for example water + NaCl), so we can achieve the lowest possible electrical resistance
  - this limits the target only to area close to skins. For example: blood. There are blood veins close to the skins, like the ones at the wrist and ankles.

## Other considerations

There are also other physiological factor need to be considered, such as ensuring body temperature to within medically acceptable level. As far as I understand, no specific <span data-key="inVivo" class="tooltip">in vivo</span> study has been conducted to investigate the feasibility and efficacy of application of biocompatible electricity to human body. Hence other unseen physiological factor that may arise as well

## Conclusion

I stumbled upon this theory


## Notes To Fellow Reader

**Please do not try to electrocute yourself to cure a viral disease**. People can die from electrocution. The purpose of this article is to explore the working of biocompatible electricity along with its potential side effect, and methods to minimise the side effect and maximize it's damage on pathogenic virus.

## References

### Journals
- [_Biocompatible Electric Current Attenuates HIV Infectivity_][journal1]
- [_Electrotherapy and shoot tip culture eliminate potato virus X in potatoes_][journal2]
- [_Elimination of Bean common mosaic virus using an electrotherapy technique_][journal3]
- [Molecular Characterization of Onion Yellow Dwarf Virus (Garlic Isolate) with Production of Virus-free Plantlets][journal4]
- [Diagnosis and elimination of banana streak virus (BSV) in Musa spp.][journal5]

[info1]: https://www.lgcstandards-atcc.org/products/all/HTB-176.aspx?geo_country=nl
[info2]: https://en.wikipedia.org/wiki/Reverse_transcriptase
[info3]: https://en.wikipedia.org/wiki/Electrocution#Medical_aspects
[info4]: https://en.wikipedia.org/wiki/Electrolysis
[info5]: https://en.wikipedia.org/wiki/Electroporation
[info6]: https://en.wikipedia.org/wiki/Transfection
[info7]: https://en.wikipedia.org/wiki/Biocide
[info8]: https://www.sciencedirect.com/topics/neuroscience/electrosurgery
[info9]: http://wme-z1.pwr.edu.pl/wp-content/uploads/2019/03/2DecompositionPotential_MTS_2019.pdf
[info10]: https://www.medicalnewstoday.com/articles/156993
[info11]: https://www.sciencedirect.com/topics/medicine-and-dentistry/guglielmi-detachable-coil
[info12]: https://www.ncbi.nlm.nih.gov/pubmed/489209
[info13]: https://en.wikipedia.org/wiki/Knockout_mouse
[info14]: https://my.clevelandclinic.org/health/treatments/15840-transcutaneous-electrical-nerve-stimulation-tens

[journal1]: http://direct.surgicaltechnology.net/content/STI05/stiV75-79.pdf
[journal2]: https://link.springer.com/article/10.1007/BF02853073
[journal3]: https://link.springer.com/article/10.1007/BF03356361
[journal4]: https://scialert.net/fulltextmobile/?doi=ijv.2012.61.70
[journal5]: https://www.cabdirect.org/cabdirect/abstract/20043022868
[journal6]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2763825/