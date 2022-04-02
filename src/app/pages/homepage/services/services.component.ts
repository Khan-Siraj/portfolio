import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any[] = [
    {
      label: "PVC",
      description: "PVC panels are often used as a cladding material, in the ceilings of residential and commercial buildings. PVC is strong, yet lightweight and since it is factory-manufactured, the finish is seamless and can be built in various designs, colours, sizes and lengths. Each PVC panel has a hollow core with a shiny surface.",
      img: "assets/images/services/pvc.jpeg"
    },
    {
      label: "Gypsum",
      description: "Also known as plasterboards or drywall, gypsum plasterboards are prefabricated, ready-to-install calcium sulfate boards used for false ceilings. These come in different thicknesses and sizes, such as 9, 12, and 15 mm, and 4 x 6 feet, 4 x 8 feet, and 4 x 10 feet, respectively.",
      img: "assets/images/services/gypsum.jpeg"
    },
    {
      label: "thermocol",
      description: "One of the biggest reasons why people use thermocol false ceilings is, because the voids in the thermocol which have trapped air, results in low thermal conductivity. So, your house remains cooler if you choose a thermocol sheet for roof design.",
      img: "assets/images/services/thermocol.jpeg"

    },
    {
      label: "pop",
      description: "Plaster of Paris, also known as POP, ceilings are quite popular because the homeowner can decide on any design they want. It’s usually available in a powder form that is made into a paste and put up on the ceiling. The paste is manipulated in the design that the homeowner chooses, and it’s applied to a chicken mesh so that it stays afloat.",
      img: "assets/images/services/pop.jpeg",
    },
    {
      label: "shed-ceiling",
      description: "A shed ceiling is a type of vaulted ceiling that angles upward or downward from low to high but only on one side. Its rise angle is not as steep as like that of the cathedral ceiling, meaning it can provide better insulation and ventilation. This ceiling style is typically seen in homes with attic spaces",
      img: "assets/images/services/shed.jpeg"
    },
    {
      label: "beam",
      description: "A beam ceiling is one which features exposed joists and beams. Beam ceilings create visual interest and bring individual flair to your home. They are normally made from timber, but other materials or a combination of materials can also be used.",
      img:"assets/images/services/beam.jpeg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
