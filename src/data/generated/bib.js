define({ entries : {
    "Kim2011single": {
        "abstract": "A simple and adaptive single image dehazing algorithm is proposed in this work. Based on the observation that a hazy image has low contrast in general, we attempt to restore the original image by enhancing the contrast. First, the proposed algorithm estimates the airlight in a given hazy image based on the quad-tree subdivision. Then, the proposed algorithm estimates the transmission map to maximize the contrast of the output image. To measure the contrast, we develop a cost function, which consists of a standard devia- tion term and a histogram uniformness term. Experimental results demonstrate that the proposed algorithm can remove haze efficiently and reconstruct fine details in original scenes clearly.",
        "author": "Kim, Jin-Hwan and Sim, Jae-Young and Kim, Chang-Su",
        "doi": "10.1109/ICASSP.2011.5946643",
        "journal": "IEEE International Conference on Acoustics, Speech and Signal Processing",
        "keywords": "type:Comference Paper, Image enhancement, image restoration, contrast enhancement, single image dehazing",
        "publisher": "IEEE",
        "series": "ICASSP",
        "title": "Single image dehazing based on contrast enhancement",
        "type": "comference paper",
        "year": "2011"
    },
    "He2011single": {
        "abstract": "In this paper, we propose a simple but effective image prior—dark channel prior to remove haze from a single input image. The dark channel prior is a kind of statistics of outdoor haze-free images. It is based on a key observation—most local patches in outdoor haze-free images contain some pixels whose intensity is very low in at least one color channel. Using this prior with the haze imaging model, we can directly estimate the thickness of the haze and recover a high-quality haze-free image. Results on a variety of hazy images demonstrate the power of the proposed prior. Moreover, a high-quality depth map can also be obtained as a byproduct of haze removal.",
        "author": "He, Kaiming and Sun, Jian and Tang, Xiaoou",
        "doi": "10.1109/TPAMI.2010.168",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "keywords": "type:Comference Paper, Dehaze, defog, image restoration, depth estimation",
        "publisher": "IEEE",
        "series": "TPAMI",
        "title": "Single Image Haze Removal Using Dark Channel Prior",
        "type": "comference paper",
        "year": "2011"
    },
    "Zhu2015a": {
        "abstract": "Single image haze removal has been a challenging " +
            "problem due to its ill-posed nature. In this paper, we propose a " +
            "simple but powerful color attenuation prior for haze removal from " +
            "a single input hazy image. By creating a linear model for modeling " +
            "the scene depth of the hazy image under this novel prior and " +
            "learning the parameters of the model with a supervised learning " +
            "method, the depth information can be well recovered. With the " +
            "depth map of the hazy image, we can easily estimate the " +
            "transmission and restore the scene radiance via the atmospheric " +
            "scattering model, and thus effectively remove the haze from a " +
            "single image. Experimental results show that the proposed " +
            "approach outperforms state-of-the-art haze removal algorithms in " +
            "terms of both efficiency and the dehazing effect.",
        "author": "Zhu, Qingsong and Mai, Jiaming and Shao, Ling",
        "doi": "10.1109/TIP.2015.2446191",
        "journal": "IEEE Transactions on Image Processing",
        "keywords": "type:Comference Paper, Dehazing, defog, image restoration, depth " +
            "restoration",
        "publisher": "IEEE",
        "series": "TIP",
        "title": "A Fast Single Image Haze Removal Algorithm " +
            "Using Color Attenuation Prior",
        "type": "comference paper",
        "year": "2015"
    },
    "Jobson1997a": {
        "abstract": "Direct observation and recorded color images of the same scenes are often strikingly different because human visual perception computes the conscious representation with vivid color and detail in shadows, and with resistance to spectral shifts in the scene illuminant. A computation for color images that approaches fidelity to scene observation must combine dy- namic range compression, color consistency—a computational analog for human vision color constancy—and color and lightness tonal rendition. In this paper, we extend a previously designed single-scale center/surround retinex to a multiscale version that achieves simultaneous dynamic range compression/color consis- tency/lightness rendition. This extension fails to produce good color rendition for a class of images that contain violations of the gray-world assumption implicit to the theoretical foundation of the retinex. Therefore, we define a method of color restoration that corrects for this deficiency at the cost of a modest dilution in color consistency. Extensive testing of the multiscale retinex with color restoration on several test scenes and over a hundred images did not reveal any pathological behavior.",
        "author": "Jobson, Danial J. and Rahman, Zia-ur and Woodell, Glenn A.",
        "doi": "10.1109/83.597272",
        "journal": "IEEE Transactions on Image Processing",
        "keywords": "type:Comference Paper",
        "publisher": "IEEE",
        "series": "TIP",
        "title": "A Multiscale Retinex for Bridging the Gap Between " +
            "Color Images and the Human Observation of Scenes",
        "type": "comference paper",
        "year": "1997"
    },
        "Buades2005a": {
        "abstract": "We propose a new measure, the method noise, to evalu- ate and compare the performance of digital image denois- ing methods. We first compute and analyze this method noise for a wide class of denoising algorithms, namely the local smoothing filters. Second, we propose a new algo- rithm, the non local means (NL-means), based on a non lo- cal averaging of all pixels in the image. Finally, we present some experiments comparing the NL-means algorithm and the local smoothing filters.",
        "author": "Buades, Antoni and Coll, Bartomeu and Morel Jean-Michel",
        "doi": "10.1109/cvpr.2005.38",
        "journal": "2005 IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR’05)",
        "keywords": "type:Comference Paper, Dehaze, defog, image restoration, depth estimation",
        "publisher": "IEEE",
        "series": "CVPR",
        "title": "A Non-Local Algorithm for Image Denoising",
        "type": "comference paper",
        "year": "2005"
    },
        "Cai2016dehazenet": {
        "abstract": "Single image haze removal is a challenging ill-posed problem. Existing methods use various constraints/priors to get plausible dehazing solutions. The key to achieve haze removal is to estimate a medium transmission map for an input hazy image. In this paper, we propose a trainable end-to-end system called DehazeNet, for medium transmission estimation. DehazeNet takes a hazy image as input, and outputs its medium transmission map that is subsequently used to recover a haze-free image via atmospheric scattering model. DehazeNet adopts Convolutional Neural Networks (CNN) based deep architecture, whose layers are specially designed to embody the established assumption- s/priors in image dehazing. Specifically, layers of Maxout units are used for feature extraction, which can generate almost all haze- relevant features. We also propose a novel nonlinear activation function in DehazeNet, called Bilateral Rectified Linear Unit (BReLU), which is able to improve the quality of recovered haze-free image. We establish connections between components of the proposed DehazeNet and those used in existing methods. Experiments on benchmark images show that DehazeNet achieves superior performance over existing methods, yet keeps efficient and easy to use.",
        "author": "Cai, Bolun and Xu, Xiangmin and Jia, Kui and Qing, Chunmei and Tao, Dacheng",
        "doi": "10.1109/TIP.2016.2598681",
        "journal": "IEEE Transactions on Image Processing",
        "keywords": "type:Comference Paper, Dehaze, image restoration, deep CNN, BReLU",
        "publisher": "IEEE",
        "series": "TIP",
        "title": "DehazeNet: An End-to-End System for Single Image Haze Removal",
        "type": "comference paper",
        "year": "2016"
    },
        "Li2017aodnet": {
        "abstract": "This paper proposes an image dehazing model built with a convolutional neural network (CNN), called All-in-One Dehazing Network (AOD-Net). It is designed based on a re-formulated atmospheric scattering model. Instead of es- timating the transmission matrix and the atmospheric light separately as most previous models did, AOD-Net directly generates the clean image through a light-weight CNN. Such a novel end-to-end design makes it easy to embed AOD-Net into other deep models, e.g., Faster R-CNN, for improving high-level tasks on hazy images. Experimental results on both synthesized and natural hazy image datasets demonstrate our superior performance than the state-of- the-art in terms of PSNR, SSIM and the subjective visual quality. Furthermore, when concatenating AOD-Net with Faster R-CNN, we witness a large improvement of the ob- ject detection performance on hazy images.",
        "author": "Li, Boyi and Peng, Xiulian and Wang, Zhangyang and Xu, Jizheng and Feng, Dan",
        "journal": "IEEE International Conference on Computer Vision",
        "keywords": "type:Comference Paper",
        "publisher": "IEEE",
        "series": "ICCV",
        "title": "AOD-Net: All-in-One Dehazing Network",
        "type": "comference paper",
        "year": "2017"
    },
        "Zhang2018densely": {
        "abstract": "We propose a new end-to-end single image dehazing method, called Densely Connected Pyramid Dehazing Net- work (DCPDN), which can jointly learn the transmission map, atmospheric light and dehazing all together. The end- to-end learning is achieved by directly embedding the atmo- spheric scattering model into the network, thereby ensuring that the proposed method strictly follows the physics-driven scattering model for dehazing. Inspired by the dense net- work that can maximize the information flow along features from different levels, we propose a new edge-preserving densely connected encoder-decoder structure with multi- level pyramid pooling module for estimating the transmis- sion map. This network is optimized using a newly in- troduced edge-preserving loss function. To further incor- porate the mutual structural information between the esti- mated transmission map and the dehazed result, we pro- pose a joint-discriminator based on generative adversar- ial network framework to decide whether the correspond- ing dehazed image and the estimated transmission map are real or fake. An ablation study is conducted to demon- strate the effectiveness of each module evaluated at both estimated transmission map and dehazed result. Exten- sive experiments demonstrate that the proposed method achieves significant improvements over the state-of-the- art methods. Code and dataset is made available at: https://github.com/hezhangsprinter/DCPDN",
        "author": "Zhang, He and Patel, Vishal M.",
        "doi": "10.1109/cvpr.2018.00337",
        "journal": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "keywords": "type:Comference Paper",
        "publisher": "IEEE",
        "series": "CVPR",
        "title": "Densely Connected Pyramid Dehazing Network",
        "type": "comference paper",
        "year": "2018"
    },
        "Dosovitskiy2021an": {
        "abstract": "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring sub- stantially fewer computational resources to train.",
        "author": "Dosovitskiy, Alexey and Beyer, Lucas and Kolesnikov, Alexander and Weissenborn, Dirk and Zhai, Xiaohua and Unterthiner, Thomas and Dehghani, Mostafa and Minderer, Matthias and " +
            "Heigold, Georg and Gelly, Sylvain and Uszkoreit, Jakob and Houlsby, Neil",
        "doi": "arXiv:2010.11929v2",
        "journal": "International Conference on Learning Representations",
        "keywords": "type:Comference Paper",
        "series": "ICLR",
        "title": "AN IMAGE IS WORTH 16X16 WORDS: TRANSFORMERS FOR IMAGE RECOGNITION AT SCALE",
        "type": "comference paper",
        "year": "2021"
    },
        "Song2022vision": {
        "abstract": "Image dehazing is a representative low-level vision task that estimates latent haze-free images from hazy images. In recent years, convolutional neural network-based methods have dominated image dehazing. However, vision Transformers, which has recently made a breakthrough in high-level vision tasks, has not brought new dimensions to image dehazing. We start with the popular Swin Transformer and find that several of its key designs are unsuitable for image dehazing. To this end, we propose DehazeFormer, which consists of various improvements, such as the modified normalization layer, activation function, and spatial information aggregation scheme. We train multiple variants of DehazeFormer on various datasets to demonstrate its effective- ness. Specifically, on the most frequently used SOTS indoor set, our small model outperforms FFA-Net with only 25% #Param and 5% computational cost. To the best of our knowledge, our large model is the first method with the PSNR over 40 dB on the SOTS indoor set, dramatically outperforming the previous state- of-the-art methods. We also collect a large-scale realistic remote sensing dehazing dataset for evaluating the method’s capability to remove highly non-homogeneous haze. We share our code and dataset at https://github.com/IDKiro/DehazeFormer.",
        "author": "Song, Yuda and He, Zhuqing and Qian, Hui and Du, Xin",
        "doi": "arXiv:2204.03883v1",
        "journal": "LATEX CLASS FILES",
        "keywords": "type:journal, Image Processing, Image Dehazing, Deep Learn- ing, Vision Transformer",
        "title": "Vision Transformers for Single Image Dehazing",
        "type": "journal",
        "year": "2022"
    },
}});