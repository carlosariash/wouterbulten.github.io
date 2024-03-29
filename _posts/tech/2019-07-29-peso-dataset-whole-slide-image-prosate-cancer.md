---
layout: post
title: "The public PESO dataset: prostate H&E whole-side images for epithelium segmentation"
date: 2019-07-29 16:17
categories: blog tech
tags: [research, deep learning, prostate cancer, immunohistochemistry, epithelium segmentation]
published: true
description: "Public dataset of prostatectomy whole-slide images for epithelium segmentation, licensed under a BY-NC-SA Creative Commons license."
image: /assets/images/peso/ihc_he_overlay.jpg
include_ha_series: false
lazyload_standalone: true
large_twitter_card: true
---

As part of our publication on [epithelium segmentation using deep learning and immunohistochemistry](https://www.nature.com/articles/s41598-018-37257-4) we published our dataset on Zenodo: the [PESO dataset](https://zenodo.org/record/1485967#.XT8F0ugzb8A). The dataset is free to use under the BY-NC-SA Creative Commons license.

<img class="lazyload" data-src="/assets/images/peso/ihc_he_overlay.jpg" style="max-width: 100%;" alt="The reference standard of the PESO set was made using immunohistochemistry, resulting in a precise and accurate ground truth.">

<a href="https://doi.org/10.5281/zenodo.1485966" class="btn btn-primary">Download dataset</a>

## Contents of the dataset

The PESO dataset consists **102 whole-slide images**, split in to in a `training` and `test` part. The total dataset is around 140GB. For the training part, the reference standard is included. This set consists of:

- 62 whole-slide images, exported at a pixel resolution of 0.48mu/pixels.
- 62 Raw color deconvolution masks containing the P63&CK8/18 channel of the color deconvolution operation. These masks mark all regions that are stained by either P63 or CK8/18 in the IHC version of the slides.
- 25 color deconvolution masks (N=25) on which manual annotations have been made. Within these regions, stain and other artifacts have been removed.
- 62 training masks (N=62) that have been used to train the main network of our paper. These masks are generated by a trained U-Net on the corresponding IHC slides.

The test set consists of:

- 40 whole-slide images, exported at a pixel resolution of 0.48mu/pixels.
- 40 xml files containing a total of 160 annotations of regions that are used in the original evaluation.
- 160 png files of 2500x2500 pixels, exported at a pixel resolution of 0.48mu/pixels. Each png file corresponds to one test region.
- 160 padded png files of 3500x3500 pixels of the same test regions.
- A mapping file (csv) describing whether a test region contains cancer or only benign tissue.

<img class="lazyload" data-src="/assets/images/peso/peso_zoom_data_example.jpg" style="max-width: 100%;" alt="Example from the PESO dataset. The dataset consists of full whole-slide images.">

<img class="lazyload" data-src="/assets/images/peso/peso_epithelium_overlay.jpg" style="max-width: 100%;" alt="Example of the ground truth segmentation of the epithelium tissue.">

## Using the data

All slides are saved in TIFF format and can be opened with a viewer such as [ASAP](https://github.com/computationalpathologygroup/ASAP). To use the images in Python we can use the python binding of ASAP. To do so, make sure that the `<ASAP install directory>/bin` is in your `PYTHONPATH`. Then use the following snippet to extract a patch:

```python
# Import the ASAP module
import multiresolutionimageinterface as mir

# Create a new reader to open files
reader = mir.MultiResolutionImageReader()
image = reader.open('path to image file')

# Get a patch at x=1000, y=12000 (coordinates relative to level 0) at level 2
level = 1
patch = image.getUCharPatch(10000, 12000, 1000, 1000, level)
```

## More info / questions?

Background information on the dataset can be found in [the paper](https://doi.org/10.1038/s41598-018-37257-4). For questions please use the [contact form](/contact).
