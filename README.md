# BiC-MPPI Project Page

Project page for **BiC-MPPI: Bidirectional Clustering MPPI for Long-Horizon Kinodynamic Trajectory Optimization**.

- Project page: <https://jeonguk-k.github.io/BiC-MPPI-project-page/>
- Current revised manuscript (2026): [static/pdfs/main.pdf](static/pdfs/main.pdf)
- arXiv: <https://arxiv.org/abs/2410.06493>
- Development code: <https://github.com/JeongUk-K/BiC-MPPI-GPU->

## Page contents

The page presents:

- an overview of bidirectional clustered branch generation, branch association, and Guide MPPI refinement;
- the modified BARN ground-vehicle and simulated 6-DOF manipulator results reported in the current manuscript;
- the sampling-budget scaling and component-ablation results collected in the ground-vehicle planning appendix; and
- a clearly labeled, website-only waypoint-assisted use case that is not part of the paper benchmark.

## Local preview

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Citation

Please cite the arXiv preprint using the following BibTeX entry:

```bibtex
@article{jung2024bicmppi,
  title         = {BiC-MPPI: Goal-Pursuing, Sampling-Based Bidirectional Rollout Clustering Path Integral for Trajectory Optimization},
  author        = {Jung, Minchan and Kim, Kwangki},
  year          = {2024},
  journal       = {arXiv preprint arXiv:2410.06493},
  eprint        = {2410.06493},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  doi           = {10.48550/arXiv.2410.06493},
  url           = {https://arxiv.org/abs/2410.06493}
}
```

## Acknowledgment

The site is based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), adapted from the [Nerfies project page](https://nerfies.github.io/).
