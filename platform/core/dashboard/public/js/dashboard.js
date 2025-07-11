(() => {
	"use strict";

	function e(e, t, n, r, o, a, l, i) {
		var s, d = "function" == typeof e ? e.options : e;
		if (t && (d.render = t, d.staticRenderFns = n, d._compiled = !0), r && (d.functional = !0), a && (d._scopeId = "data-v-" + a), l ? (s = function(e) {
				(e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(l)
			}, d._ssrRegister = s) : o && (s = i ? function() {
				o.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
			} : o), s)
			if (d.functional) {
				d._injectStyles = s;
				var c = d.render;
				d.render = function(e, t) {
					return s.call(t), c(e, t)
				}
			} else {
				var u = d.beforeCreate;
				d.beforeCreate = u ? [].concat(u, s) : [s]
			} return {
			exports: e,
			options: d
		}
	}
	const t = e({
		props: {
			verifyUrl: {
				type: String,
				default: function() {
					return null
				},
				required: !0
			},
			settingUrl: {
				type: String,
				default: function() {
					return null
				},
				required: !0
			}
		},
		data: function() {
			return {
				verified: !0
			}
		},
		mounted: function() {
			this.verifyLicense()
		},
		methods: {
			verifyLicense: function() {
				var e = this;
				axios.get(this.verifyUrl).then((function(t) {
					t.data.error && (e.verified = !1)
				}))
			}
		}
	}, (function() {
		var e = this,
			t = e.$createElement,
			n = e._self._c || t;
		return e.verified ? e._e() : n("div", {
			staticClass: "note note-warning"
		}, [n("p", [e._v("asdasdasdasdYour license is invalid, please contact support. If you didn't setup license code, please go to "), n("a", {
			attrs: {
				href: e.settingUrl
			}
		}, [e._v("Settings")]), e._v(" to activate license!")])])
	}), [], !1, null, null, null).exports;
	const n = e({
		props: {
			checkUpdateUrl: {
				type: String,
				default: function() {
					return null
				},
				required: !0
			},
			settingUrl: {
				type: String,
				default: function() {
					return null
				},
				required: !0
			}
		},
		data: function() {
			return {
				hasNewVersion: !1,
				message: null
			}
		},
		mounted: function() {
			this.checkUpdate()
		},
		methods: {
			checkUpdate: function() {
				var e = this;
				axios.get(this.checkUpdateUrl).then((function(t) {
					!t.data.error && t.data.data.has_new_version && (e.hasNewVersion = !0, e.message = t.data.message)
				}))
			}
		}
	}, (function() {
		var e = this,
			t = e.$createElement,
			n = e._self._c || t;
		return e.hasNewVersion ? n("div", {
			staticClass: "note note-warning"
		}, [n("p", [e._v(e._s(e.message) + ", please go to "), n("a", {
			attrs: {
				href: e.settingUrl
			}
		}, [e._v("System Updater")]), e._v(" to upgrade to the latest version!")])]) : e._e()
	}), [], !1, null, null, null).exports;

	function r(e) {
		return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, r(e)
	}

	function o(e, t) {
		for (var n = 0; n < t.length; n++) {
			var o = t[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (a = o.key, l = void 0, l = function(e, t) {
				if ("object" !== r(e) || null === e) return e;
				var n = e[Symbol.toPrimitive];
				if (void 0 !== n) {
					var o = n.call(e, t || "default");
					if ("object" !== r(o)) return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === t ? String : Number)(e)
			}(a, "string"), "symbol" === r(l) ? l : String(l)), o)
		}
		var a, l
	}
	"undefined" != typeof vueApp && vueApp.booting((function(e) {
		e.component("verify-license-component", t), e.component("check-update-component", n)
	}));
	var a = {},
		l = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e)
			}
			var t, n, r;
			return t = e, r = [{
				key: "loadWidget",
				value: function(t, n, r, o) {
					var l = t.closest(".widget_item"),
						i = l.attr("id");
					void 0 !== o && (a[i] = o);
					var s = l.find("a.collapse-expand");
					if (!s.length || !s.hasClass("collapse")) {
						Botble.blockUI({
							target: t,
							iconOnly: !0,
							overlayColor: "none"
						}), void 0 !== r && null != r || (r = {});
						var d = l.find("select[name=predefined_range]");
						d.length && (r.predefined_range = d.val()), $.ajax({
							type: "GET",
							cache: !1,
							url: n,
							data: r,
							success: function(n) {
								Botble.unblockUI(t), n.error ? t.html('<div class="dashboard_widget_msg col-12"><p>' + n.message + "</p>") : (t.html(n.data), void 0 !== o ? o() : a[i] && a[i](), 0 !== t.find(".scroller").length && Botble.callScroll(t.find(".scroller")), $(".equal-height").equalHeights(), e.initSortable())
							},
							error: function(e) {
								Botble.unblockUI(t), Botble.handleError(e)
							}
						})
					}
				}
			}, {
				key: "initSortable",
				value: function() {
					if ($("#list_widgets").length > 0) {
						var e = document.getElementById("list_widgets");
						Sortable.create(e, {
							group: "widgets",
							sort: !0,
							delay: 0,
							disabled: !1,
							store: null,
							animation: 150,
							handle: ".portlet-title",
							ghostClass: "sortable-ghost",
							chosenClass: "sortable-chosen",
							dataIdAttr: "data-id",
							forceFallback: !1,
							fallbackClass: "sortable-fallback",
							fallbackOnBody: !1,
							scroll: !0,
							scrollSensitivity: 30,
							scrollSpeed: 10,
							onUpdate: function() {
								var e = [];
								$.each($(".widget_item"), (function(t, n) {
									e.push($(n).prop("id"))
								})), $.ajax({
									type: "POST",
									cache: !1,
									url: route("dashboard.update_widget_order"),
									data: {
										items: e
									},
									success: function(e) {
										e.error ? Botble.showError(e.message) : Botble.showSuccess(e.message)
									},
									error: function(e) {
										Botble.handleError(e)
									}
								})
							}
						})
					}
				}
			}], (n = [{
				key: "init",
				value: function() {
					var t = $("#list_widgets");
					$(document).on("click", ".portlet > .portlet-title .tools > a.remove", (function(e) {
						e.preventDefault(), $("#hide-widget-confirm-bttn").data("id", $(e.currentTarget).closest(".widget_item").prop("id")), $("#hide_widget_modal").modal("show")
					})), t.on("click", ".page_next, .page_previous", (function(t) {
						t.preventDefault();
						var n = $(t.currentTarget),
							r = n.prop("href");
						r && e.loadWidget(n.closest(".portlet").find(".portlet-body"), r)
					})), t.on("change", ".number_record .numb", (function(t) {
						t.preventDefault();
						var n = $(t.currentTarget),
							r = n.closest(".number_record").find(".numb").val();
						!isNaN(r) && r > 0 ? e.loadWidget(n.closest(".portlet").find(".portlet-body"), n.closest(".widget_item").attr("data-url"), {
							paginate: r
						}) : Botble.showError("Please input a number!")
					})), t.on("click", ".btn_change_paginate", (function(e) {
						e.preventDefault();
						var t = $(e.currentTarget),
							n = t.closest(".number_record").find(".numb"),
							r = parseInt(n.prop("min") || 5),
							o = parseInt(n.prop("max") || 100),
							a = parseInt(n.prop("step") || 5),
							l = parseInt(n.val());
						t.hasClass("btn_up") ? l < o && (l += a) : t.hasClass("btn_down") && (l - a > 0 ? l -= a : l = a, l < r && (l = r)), l != parseInt(n.val()) && n.val(l).trigger("change")
					})), $("#hide-widget-confirm-bttn").on("click", (function(e) {
						e.preventDefault();
						var t = $(e.currentTarget).data("id");
						$.ajax({
							type: "GET",
							cache: !1,
							url: route("dashboard.hide_widget", {
								name: t
							}),
							success: function(n) {
								n.error ? Botble.showError(n.message) : ($("#" + t).fadeOut(), Botble.showSuccess(n.message)), $("#hide_widget_modal").modal("hide");
								var r = $(e.currentTarget).closest(".portlet");
								$(document).hasClass("page-portlet-fullscreen") && $(document).removeClass("page-portlet-fullscreen"), r.find("[data-bs-toggle=tooltip]").tooltip("destroy"), r.remove()
							},
							error: function(e) {
								Botble.handleError(e)
							}
						})
					})), $(document).on("click", ".portlet:not(.widget-load-has-callback) > .portlet-title .tools > a.reload", (function(t) {
						t.preventDefault();
						var n = $(t.currentTarget);
						e.loadWidget(n.closest(".portlet").find(".portlet-body"), n.closest(".widget_item").attr("data-url"))
					})), $(document).on("click", ".portlet > .portlet-title .tools > .collapse, .portlet .portlet-title .tools > .expand", (function(t) {
						t.preventDefault();
						var n = $(t.currentTarget),
							r = n.closest(".portlet"),
							o = $.trim(n.data("state"));
						"expand" === o ? (r.find(".portlet-body").removeClass("collapse").addClass("expand"), e.loadWidget(r.find(".portlet-body"), n.closest(".widget_item").attr("data-url"))) : r.find(".portlet-body").removeClass("expand").addClass("collapse"), $.ajax({
							type: "POST",
							cache: !1,
							url: route("dashboard.edit_widget_setting_item"),
							data: {
								name: n.closest(".widget_item").prop("id"),
								setting_name: "state",
								setting_value: o
							},
							success: function() {
								"collapse" === o ? (n.data("state", "expand"), r.find(".predefined-ranges").addClass("d-none"), r.find("a.reload").addClass("d-none"), r.find("a.fullscreen").addClass("d-none")) : (n.data("state", "collapse"), r.find(".predefined-ranges").removeClass("d-none"), r.find("a.reload").removeClass("d-none"), r.find("a.fullscreen").removeClass("d-none"))
							},
							error: function(e) {
								Botble.handleError(e)
							}
						})
					})), $(document).on("change", ".portlet select[name=predefined_range]", (function(t) {
						t.preventDefault();
						var n = $(t.currentTarget);
						e.loadWidget(n.closest(".portlet").find(".portlet-body"), n.closest(".widget_item").attr("data-url"), {
							changed_predefined_range: 1
						})
					}));
					var n = $("#manage_widget_modal");
					$(document).on("click", ".manage-widget", (function(e) {
						e.preventDefault(), n.modal("show")
					})), n.on("change", ".swc_wrap input", (function(e) {
						$(e.currentTarget).closest("section").find("i").toggleClass("widget_none_color")
					}))
				}
			}]) && o(t.prototype, n), r && o(t, r), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e
		}();
	$(document).ready((function() {
		(new l).init(), window.BDashboard = l
	}))
})();