import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

const materialsArray = [
    MatButtonModule
]


@NgModule({
    declarations : [],
    imports : [CommonModule, ...materialsArray],
    exports : [...materialsArray]
})
export class MaterialModule{}