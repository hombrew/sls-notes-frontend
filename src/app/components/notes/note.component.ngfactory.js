/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../spinner/spinner-component.ngfactory";
import * as i2 from "../spinner/spinner-component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./note.component";
import * as i6 from "../../services/notes-api/notes-api.service";
import * as i7 from "../../services/notes-data/notes-data.service";
var styles_NoteComponent = [];
var RenderType_NoteComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NoteComponent, data: {} });
export { RenderType_NoteComponent as RenderType_NoteComponent };
function View_NoteComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "loading-overlay"]], null, null, null, null, null))], null, null); }
function View_NoteComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" Created ", " "])), i0.ɵppd(2, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i0.ɵnov(_v.parent, 0), (((_co.note == null) ? null : _co.note.timestamp) * 1000), "short")); _ck(_v, 1, 0, currVal_0); }); }
function View_NoteComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "alert alert-", _co.alert.type, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.alert.message; _ck(_v, 1, 0, currVal_1); }); }
function View_NoteComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "div", [["class", "div-loading"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "spinner", [], null, null, null, i1.View_SpinnerComponent_0, i1.RenderType_SpinnerComponent)), i0.ɵdid(4, 114688, null, 0, i2.SpinnerComponent, [], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, null); }
function View_NoteComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "form-validation-alert soft-alert"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Please type in a note."]))], null, null); }
export function View_NoteComponent_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i3.DatePipe, [i0.LOCALE_ID]), i0.ɵqud(402653184, 1, { vcInput: 0 }), (_l()(), i0.ɵeld(2, 0, null, null, 64, "div", [["class", "note-modal page-modal"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 63, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 62, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_1)), i0.ɵdid(6, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 59, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 7, "div", [["class", "note-actions flex-space"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 2, "span", [["class", "note-meta"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_2)), i0.ɵdid(11, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(12, 0, null, null, 3, "span", [["class", "page-modal-button"], ["id", "page-modal-close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCloseNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 0, "i", [["class", "fas fa-times"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "span", [["class", "key-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Esc"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_3)), i0.ɵdid(17, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_4)), i0.ɵdid(19, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(20, 0, null, null, 46, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 22).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 22).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(21, 16384, null, 0, i4.ɵangular_packages_forms_forms_bg, [], null, null), i0.ɵdid(22, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i0.ɵdid(24, 16384, null, 0, i4.NgControlStatusGroup, [[4, i4.ControlContainer]], null, null), (_l()(), i0.ɵeld(25, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵeld(26, 0, null, null, 7, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(27, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fas fa-thumbtack small pin"]], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "title"], ["name", "title"], ["type", "text"]], [[8, "placeholder", 0], [8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 29)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 29).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 29)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 29)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(29, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(31, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(33, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i0.ɵeld(34, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, [[1, 0], ["focus", 1]], null, 5, "textarea", [["class", "form-control"], ["cols", "30"], ["formControlName", "content"], ["id", "content"], ["name", "content"], ["placeholder", "Take a note..."], ["rows", "4"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 36)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 36).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 36)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 36)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(36, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(38, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(40, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i0.ɵeld(41, 0, null, null, 5, "input", [["formControlName", "cat"], ["id", "cat"], ["name", "cat"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 42)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 42).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 42)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 42)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(42, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(44, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(46, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i0.ɵeld(47, 0, null, null, 5, "input", [["formControlName", "timestamp"], ["id", "timestamp"], ["name", "timestamp"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 48)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 48).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 48)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 48)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(48, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(50, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(52, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i0.ɵeld(53, 0, null, null, 5, "input", [["formControlName", "note_id"], ["id", "note_id"], ["name", "note_id"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 54)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 54).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 54)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 54)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(54, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(56, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(58, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i0.ɵeld(59, 0, null, null, 7, "div", [["class", "form-group flex-space"]], null, null, null, null, null)), (_l()(), i0.ɵeld(60, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_5)), i0.ɵdid(62, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(63, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i0.ɵeld(64, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fas fa-edit"]], null, null, null, null, null)), (_l()(), i0.ɵeld(65, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Save Note"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 6, 0, currVal_0); var currVal_1 = ((_co.note == null) ? null : _co.note.timestamp); _ck(_v, 11, 0, currVal_1); var currVal_2 = _co.alert.message; _ck(_v, 17, 0, currVal_2); var currVal_3 = _co.isLoading; _ck(_v, 19, 0, currVal_3); var currVal_11 = _co.noteForm; _ck(_v, 22, 0, currVal_11); var currVal_21 = "title"; _ck(_v, 31, 0, currVal_21); var currVal_30 = "content"; _ck(_v, 38, 0, currVal_30); var currVal_39 = "cat"; _ck(_v, 44, 0, currVal_39); var currVal_48 = "timestamp"; _ck(_v, 50, 0, currVal_48); var currVal_57 = "note_id"; _ck(_v, 56, 0, currVal_57); var currVal_58 = (_co.noteForm.controls["content"].touched && !_co.noteForm.controls["content"].valid); _ck(_v, 62, 0, currVal_58); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = i0.ɵnov(_v, 24).ngClassUntouched; var currVal_5 = i0.ɵnov(_v, 24).ngClassTouched; var currVal_6 = i0.ɵnov(_v, 24).ngClassPristine; var currVal_7 = i0.ɵnov(_v, 24).ngClassDirty; var currVal_8 = i0.ɵnov(_v, 24).ngClassValid; var currVal_9 = i0.ɵnov(_v, 24).ngClassInvalid; var currVal_10 = i0.ɵnov(_v, 24).ngClassPending; _ck(_v, 20, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = i0.ɵinlineInterpolate(1, "", _co.defaultTitle, ""); var currVal_13 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.title), ""); var currVal_14 = i0.ɵnov(_v, 33).ngClassUntouched; var currVal_15 = i0.ɵnov(_v, 33).ngClassTouched; var currVal_16 = i0.ɵnov(_v, 33).ngClassPristine; var currVal_17 = i0.ɵnov(_v, 33).ngClassDirty; var currVal_18 = i0.ɵnov(_v, 33).ngClassValid; var currVal_19 = i0.ɵnov(_v, 33).ngClassInvalid; var currVal_20 = i0.ɵnov(_v, 33).ngClassPending; _ck(_v, 28, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_22 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.content), ""); var currVal_23 = i0.ɵnov(_v, 40).ngClassUntouched; var currVal_24 = i0.ɵnov(_v, 40).ngClassTouched; var currVal_25 = i0.ɵnov(_v, 40).ngClassPristine; var currVal_26 = i0.ɵnov(_v, 40).ngClassDirty; var currVal_27 = i0.ɵnov(_v, 40).ngClassValid; var currVal_28 = i0.ɵnov(_v, 40).ngClassInvalid; var currVal_29 = i0.ɵnov(_v, 40).ngClassPending; _ck(_v, 35, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_31 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.cat), ""); var currVal_32 = i0.ɵnov(_v, 46).ngClassUntouched; var currVal_33 = i0.ɵnov(_v, 46).ngClassTouched; var currVal_34 = i0.ɵnov(_v, 46).ngClassPristine; var currVal_35 = i0.ɵnov(_v, 46).ngClassDirty; var currVal_36 = i0.ɵnov(_v, 46).ngClassValid; var currVal_37 = i0.ɵnov(_v, 46).ngClassInvalid; var currVal_38 = i0.ɵnov(_v, 46).ngClassPending; _ck(_v, 41, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_40 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.timestamp), ""); var currVal_41 = i0.ɵnov(_v, 52).ngClassUntouched; var currVal_42 = i0.ɵnov(_v, 52).ngClassTouched; var currVal_43 = i0.ɵnov(_v, 52).ngClassPristine; var currVal_44 = i0.ɵnov(_v, 52).ngClassDirty; var currVal_45 = i0.ɵnov(_v, 52).ngClassValid; var currVal_46 = i0.ɵnov(_v, 52).ngClassInvalid; var currVal_47 = i0.ɵnov(_v, 52).ngClassPending; _ck(_v, 47, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_49 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.note_id), ""); var currVal_50 = i0.ɵnov(_v, 58).ngClassUntouched; var currVal_51 = i0.ɵnov(_v, 58).ngClassTouched; var currVal_52 = i0.ɵnov(_v, 58).ngClassPristine; var currVal_53 = i0.ɵnov(_v, 58).ngClassDirty; var currVal_54 = i0.ɵnov(_v, 58).ngClassValid; var currVal_55 = i0.ɵnov(_v, 58).ngClassInvalid; var currVal_56 = i0.ɵnov(_v, 58).ngClassPending; _ck(_v, 53, 0, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_59 = (!_co.noteForm.valid || _co.disableSubmit); _ck(_v, 63, 0, currVal_59); }); }
export function View_NoteComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "note", [], null, [["document", "keydown"]], function (_v, en, $event) { var ad = true; if (("document:keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).handleKeyboardEvent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NoteComponent_0, RenderType_NoteComponent)), i0.ɵdid(1, 1163264, null, 0, i5.NoteComponent, [i4.FormBuilder, i6.NotesApiService, i7.NotesDataService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NoteComponentNgFactory = i0.ɵccf("note", i5.NoteComponent, View_NoteComponent_Host_0, { note: "note" }, { closeModalEvent: "closeModalEvent", updateNoteEvent: "updateNoteEvent" }, []);
export { NoteComponentNgFactory as NoteComponentNgFactory };
